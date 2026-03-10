/**
 * Unit tests for the create-post script helpers.
 */

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";

import {
  buildPostContent,
  getLocalDateString,
  slugify,
  writePostFile,
} from "../scripts/create-post.mjs";

test("slugify produces a url-safe slug", () => {
  assert.equal(slugify("Hello World"), "hello-world");
  assert.equal(slugify("  Leading & Trailing  "), "leading-trailing");
  assert.equal(slugify("O'Reilly Media"), "oreilly-media");
});

test("getLocalDateString returns YYYY-MM-DD", () => {
  const value = getLocalDateString();
  assert.match(value, /^\d{4}-\d{2}-\d{2}$/);
});

test("buildPostContent includes required frontmatter", () => {
  const content = buildPostContent({
    title: "Post Title",
    summary: "Post summary.",
    date: "2025-01-02",
    tags: ["Alpha", "Beta"],
    featured: true,
  });

  assert.ok(content.startsWith("---"));
  assert.match(content, /title: "Post Title"/);
  assert.match(content, /date: 2025-01-02/);
  assert.match(content, /summary: "Post summary\."/);
  assert.match(content, /tags: \["Alpha", "Beta"\]/);
  assert.match(content, /featured: true/);
});

test("writePostFile writes content and blocks overwrite", async () => {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "post-"));
  const filePath = path.join(tempDir, "2025-01-02-test-post.md");
  const content = "Test content";

  await writePostFile(filePath, content);

  const written = await fs.readFile(filePath, "utf8");
  assert.equal(written, content);

  await assert.rejects(
    () => writePostFile(filePath, content),
    /already exists/,
  );
});
