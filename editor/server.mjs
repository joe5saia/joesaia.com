#!/usr/bin/env node

/**
 * Local blog editor: lists, opens, and saves posts in src/content/writing,
 * and shows the review comments Amp leaves in a sidecar JSON file per post.
 * See "Blog editor" in AGENTS.md for the comment format.
 */

import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import {
  DATE_FORMAT,
  buildFrontmatter,
  getLocalDateString,
  slugify,
  writePostFile,
} from "../scripts/create-post.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POST_FILE = /^[A-Za-z0-9._-]+\.md$/;
const COMMENT_STATUSES = new Set(["open", "applied", "dismissed"]);

/**
 * @param {string} content
 * @returns {string}
 */
function versionOf(content) {
  return createHash("sha1").update(content).digest("hex");
}

/**
 * Read the few frontmatter fields the post list shows.
 * @param {string} content
 */
export function readFrontmatter(content) {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content)?.[1] ?? "";
  const field = (name) =>
    new RegExp(`^${name}:\\s*(.*)$`, "m")
      .exec(block)?.[1]
      .trim()
      .replace(/^(["'])(.*)\1$/, "$2");

  return {
    title: field("title") ?? "",
    date: field("date") ?? "",
    draft: field("draft") === "true",
  };
}

/**
 * @param {{ writingDir: string, commentsDir: string, previewBase?: () => Promise<string | null> }} options
 * @returns {http.Server}
 */
export function createEditorServer({ writingDir, commentsDir, previewBase }) {
  const postPath = (file) => path.join(writingDir, file);
  const commentsPath = (file) =>
    path.join(commentsDir, file.replace(/\.md$/, ".json"));

  async function postFiles() {
    const entries = await fs.readdir(writingDir);
    return entries.filter((name) => POST_FILE.test(name));
  }

  async function readComments(file) {
    try {
      const comments = JSON.parse(
        await fs.readFile(commentsPath(file), "utf8"),
      );
      return Array.isArray(comments) ? comments : [];
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  }

  async function setCommentStatus(file, ids, status) {
    const comments = await readComments(file);
    for (const comment of comments) {
      if (ids.includes(comment.id)) comment.status = status;
    }
    return writeComments(file, comments);
  }

  async function writeComments(file, comments) {
    await fs.mkdir(commentsDir, { recursive: true });
    await fs.writeFile(
      commentsPath(file),
      JSON.stringify(comments, null, 2) + "\n",
    );
    return comments;
  }

  async function handle(req, res) {
    const url = new URL(req.url, "http://localhost");
    const parts = url.pathname
      .split("/")
      .filter(Boolean)
      .map(decodeURIComponent);

    if (req.method === "GET" && url.pathname === "/") {
      const html = await fs.readFile(
        path.join(ROOT, "editor/index.html"),
        "utf8",
      );
      return send(res, 200, html, "text/html; charset=utf-8");
    }

    if (req.method === "GET" && url.pathname === "/tokens.css") {
      const css = await fs.readFile(
        path.join(ROOT, "design-system/tokens.css"),
        "utf8",
      );
      return send(res, 200, css, "text/css; charset=utf-8");
    }

    if (req.method === "GET" && url.pathname === "/api/posts") {
      const posts = await Promise.all(
        (await postFiles()).map(async (file) => {
          const content = await fs.readFile(postPath(file), "utf8");
          const comments = await readComments(file);
          return {
            file,
            ...readFrontmatter(content),
            openComments: comments.filter(
              (comment) => (comment.status ?? "open") === "open",
            ).length,
          };
        }),
      );
      posts.sort(
        (a, b) =>
          Number(b.draft) - Number(a.draft) || b.date.localeCompare(a.date),
      );
      return sendJson(res, 200, {
        posts,
        previewBase: previewBase ? await previewBase() : null,
      });
    }

    // New posts follow `task post`: YYYY-MM-DD-slug.md, frontmatter only, as a draft.
    if (req.method === "POST" && url.pathname === "/api/posts") {
      const body = await readJson(req);
      const title = typeof body.title === "string" ? body.title.trim() : "";
      const summary =
        typeof body.summary === "string" ? body.summary.trim() : "";
      const date = body.date ?? getLocalDateString();
      if (!title || !summary) {
        return sendJson(res, 400, { error: "Title and summary are required." });
      }
      if (typeof date !== "string" || !DATE_FORMAT.test(date)) {
        return sendJson(res, 400, { error: "Date must be YYYY-MM-DD." });
      }
      const slug = slugify(title);
      if (!slug) {
        return sendJson(res, 400, {
          error: "The title needs at least one letter or number.",
        });
      }
      const file = `${date}-${slug}.md`;
      const content =
        buildFrontmatter({
          title,
          summary,
          date,
          tags: [],
          featured: false,
          draft: true,
        }) + "\n";
      try {
        await writePostFile(postPath(file), content);
      } catch (error) {
        if (error.cause?.code !== "EEXIST") throw error;
        return sendJson(res, 409, { error: `${file} already exists.` });
      }
      return sendJson(res, 201, { file });
    }

    if (parts[0] !== "api" || parts[1] !== "posts" || !parts[2]) {
      return sendJson(res, 404, { error: "Not found" });
    }

    const file = parts[2];
    if (!POST_FILE.test(file) || !(await postFiles()).includes(file)) {
      return sendJson(res, 404, { error: `No post named ${file}` });
    }

    if (req.method === "GET" && parts.length === 3) {
      const content = await fs.readFile(postPath(file), "utf8");
      return sendJson(res, 200, {
        file,
        content,
        version: versionOf(content),
        comments: await readComments(file),
      });
    }

    if (req.method === "PUT" && parts.length === 3) {
      const body = await readJson(req);
      if (typeof body.content !== "string") {
        return sendJson(res, 400, { error: "content must be a string" });
      }
      const current = await fs.readFile(postPath(file), "utf8");
      if (!body.force && body.version !== versionOf(current)) {
        return sendJson(res, 409, {
          error: "The file changed on disk since you opened it.",
        });
      }
      await fs.writeFile(postPath(file), body.content);
      const applied = Array.isArray(body.applied) ? body.applied : [];
      const comments = applied.length
        ? await setCommentStatus(file, applied, "applied")
        : await readComments(file);
      return sendJson(res, 200, { version: versionOf(body.content), comments });
    }

    if (
      req.method === "POST" &&
      parts[3] === "comments" &&
      parts[4] &&
      parts[5] === "replies"
    ) {
      const { text } = await readJson(req);
      if (typeof text !== "string" || !text.trim()) {
        return sendJson(res, 400, { error: "A reply needs some text." });
      }
      const comments = await readComments(file);
      const comment = comments.find((c) => c.id === parts[4]);
      if (!comment) {
        return sendJson(res, 404, { error: `No note ${parts[4]}` });
      }
      comment.replies = [
        ...(comment.replies ?? []),
        { author: "Joe", text: text.trim(), at: new Date().toISOString() },
      ];
      return sendJson(res, 200, {
        comments: await writeComments(file, comments),
      });
    }

    if (req.method === "POST" && parts[3] === "comments" && parts[4]) {
      const { status } = await readJson(req);
      if (!COMMENT_STATUSES.has(status)) {
        return sendJson(res, 400, { error: "Unknown status" });
      }
      const comments = await setCommentStatus(file, [parts[4]], status);
      return sendJson(res, 200, { comments });
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  }

  return http.createServer((req, res) => {
    handle(req, res).catch((error) => {
      sendJson(res, 500, { error: error.message });
    });
  });
}

function send(res, status, body, type) {
  res.writeHead(status, { "content-type": type, "cache-control": "no-store" });
  res.end(body);
}

function sendJson(res, status, value) {
  send(res, status, JSON.stringify(value), "application/json");
}

async function readJson(req) {
  let raw = "";
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

/** The dev-site portal URL, when the orb's web service has one. */
async function webPortalUrl() {
  try {
    const portal = JSON.parse(
      await fs.readFile(path.join(ROOT, ".amp/portals/web.json"), "utf8"),
    );
    return portal.links?.[0]?.url ?? null;
  } catch {
    return null;
  }
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  const port = Number(process.env.PORT ?? 4322);
  createEditorServer({
    writingDir: path.join(ROOT, "src/content/writing"),
    commentsDir: path.join(ROOT, ".amp/blog-review"),
    previewBase: webPortalUrl,
  }).listen(port, () => {
    console.log(`Blog editor on http://localhost:${port}/`);
  });
}
