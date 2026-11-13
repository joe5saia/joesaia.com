/**
 * Tests for the blog editor's HTTP API.
 */

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { after, before, test } from "node:test";

import { createEditorServer } from "../editor/server.mjs";

const POST = `---
title: "A Draft: With Colon"
date: 2026-11-09
summary: "Summary."
draft: true
---

The odds is good.
`;

let base;
let server;
let writingDir;
let commentsDir;

before(async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "editor-"));
  writingDir = path.join(root, "writing");
  commentsDir = path.join(root, "comments");
  await fs.mkdir(writingDir);
  await fs.mkdir(commentsDir);
  await fs.writeFile(path.join(writingDir, "2026-11-09-draft.md"), POST);
  await fs.writeFile(
    path.join(writingDir, "2026-01-01-old.md"),
    '---\ntitle: Old\ndate: 2026-01-01\nsummary: "x"\n---\nBody\n',
  );
  await fs.writeFile(path.join(root, "secret.md"), "secret");
  await fs.writeFile(
    path.join(commentsDir, "2026-11-09-draft.json"),
    JSON.stringify([
      { id: "a", quote: "odds is", suggestion: "odds are" },
      { id: "b", quote: "good", note: "Good how?" },
    ]),
  );
  server = createEditorServer({ writingDir, commentsDir });
  await new Promise((resolve) => server.listen(0, resolve));
  base = `http://localhost:${server.address().port}`;
});

after(() => server.close());

const call = (route, options = {}) =>
  fetch(base + route, {
    ...options,
    body: options.body && JSON.stringify(options.body),
  });

test("lists posts with draft flag and open note count", async () => {
  const { posts } = await (await call("/api/posts")).json();
  assert.deepEqual(
    posts.map(({ file, title, draft, openComments }) => ({
      file,
      title,
      draft,
      openComments,
    })),
    [
      {
        file: "2026-11-09-draft.md",
        title: "A Draft: With Colon",
        draft: true,
        openComments: 2,
      },
      {
        file: "2026-01-01-old.md",
        title: "Old",
        draft: false,
        openComments: 0,
      },
    ],
  );
});

test("refuses files outside the writing directory", async () => {
  for (const name of [
    "..%2Fsecret.md",
    "secret.md",
    "..%2F..%2Fetc%2Fpasswd",
  ]) {
    assert.equal((await call(`/api/posts/${name}`)).status, 404);
  }
});

test("saves only against the current version and records applied notes", async () => {
  const route = "/api/posts/2026-11-09-draft.md";
  const { version } = await (await call(route)).json();
  const edited = POST.replace("odds is", "odds are");

  const stale = await call(route, {
    method: "PUT",
    body: { content: edited, version: "stale", applied: ["a"] },
  });
  assert.equal(stale.status, 409);
  assert.equal(
    await fs.readFile(path.join(writingDir, "2026-11-09-draft.md"), "utf8"),
    POST,
  );

  const saved = await call(route, {
    method: "PUT",
    body: { content: edited, version, applied: ["a"] },
  });
  assert.equal(saved.status, 200);
  assert.equal(
    await fs.readFile(path.join(writingDir, "2026-11-09-draft.md"), "utf8"),
    edited,
  );
  const comments = JSON.parse(
    await fs.readFile(path.join(commentsDir, "2026-11-09-draft.json"), "utf8"),
  );
  assert.deepEqual(
    comments.map(({ id, status }) => ({ id, status })),
    [
      { id: "a", status: "applied" },
      { id: "b", status: undefined },
    ],
  );
});

test("creates a frontmatter-only draft named like `task post`", async () => {
  const created = await call("/api/posts", {
    method: "POST",
    body: { title: 'Joe\'s "New" Post', summary: "Why.", date: "2026-11-12" },
  });
  assert.equal(created.status, 201);
  assert.deepEqual(await created.json(), {
    file: "2026-11-12-joes-new-post.md",
  });
  assert.equal(
    await fs.readFile(
      path.join(writingDir, "2026-11-12-joes-new-post.md"),
      "utf8",
    ),
    '---\ntitle: "Joe\'s \\"New\\" Post"\ndate: 2026-11-12\nsummary: "Why."\nfeatured: false\ndraft: true\n---\n\n',
  );

  const again = await call("/api/posts", {
    method: "POST",
    body: { title: "Joe's New Post", summary: "Other.", date: "2026-11-12" },
  });
  assert.equal(again.status, 409);
  assert.equal(
    (
      await call("/api/posts", {
        method: "POST",
        body: { title: "No summary", summary: " " },
      })
    ).status,
    400,
  );
});

test("appends Joe's replies to a note and keeps the rest of the file", async () => {
  const route = "/api/posts/2026-11-09-draft.md/comments/b/replies";
  assert.equal(
    (await call(route, { method: "POST", body: { text: "  First.  " } }))
      .status,
    200,
  );
  const second = await call(route, {
    method: "POST",
    body: { text: "Second." },
  });
  assert.equal(second.status, 200);

  const comments = JSON.parse(
    await fs.readFile(path.join(commentsDir, "2026-11-09-draft.json"), "utf8"),
  );
  assert.deepEqual((await second.json()).comments, comments);
  const [a, b] = comments;
  assert.equal(a.replies, undefined);
  assert.equal(b.note, "Good how?");
  assert.deepEqual(
    b.replies.map(({ author, text }) => ({ author, text })),
    [
      { author: "Joe", text: "First." },
      { author: "Joe", text: "Second." },
    ],
  );

  const blank = await call(route, { method: "POST", body: { text: " " } });
  assert.equal(blank.status, 400);
  const missing = await call(
    "/api/posts/2026-11-09-draft.md/comments/zz/replies",
    {
      method: "POST",
      body: { text: "Hi" },
    },
  );
  assert.equal(missing.status, 404);
});
