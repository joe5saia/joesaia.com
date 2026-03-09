#!/usr/bin/env node

/**
 * Create a new blog post in src/content/writing with required frontmatter.
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const DEFAULT_OUTPUT_DIR = path.resolve(process.cwd(), "src/content/writing");
const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;
const USAGE = `
Usage:
  pnpm post:new "Post Title" "Post summary"
  pnpm post:new -- --title "Post Title" --summary "Post summary"

Options:
  --title <string>     Post title (required)
  --summary <string>   Post summary (required)
  --date <YYYY-MM-DD>  Override date (default: today)
  --slug <string>      Override slug
  --tags <csv>         Comma-separated tags
  --featured           Mark post as featured
  --no-featured        Explicitly mark as not featured
  --dir <path>         Output directory (default: src/content/writing)
  -h, --help           Show help
`;

/**
 * Convert a title into a URL-safe slug.
 * @param {string} title
 * @returns {string}
 */
export function slugify(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Escape double quotes in YAML string values.
 * @param {string} value
 * @returns {string}
 */
export function escapeYamlString(value) {
  return value.replace(/"/g, "\\\"");
}

/**
 * Return today's date in YYYY-MM-DD using local time.
 * @returns {string}
 */
export function getLocalDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Build the frontmatter and starter body for a new post.
 * @param {{
 *   title: string,
 *   summary: string,
 *   date: string,
 *   tags: string[],
 *   featured: boolean
 * }} params
 * @returns {string}
 */
export function buildPostContent({ title, summary, date, tags, featured }) {
  const lines = [
    "---",
    `title: "${escapeYamlString(title)}"`,
    `date: ${date}`,
    `summary: "${escapeYamlString(summary)}"`,
  ];

  if (tags.length > 0) {
    const tagList = tags.map((tag) => `"${escapeYamlString(tag)}"`).join(", ");
    lines.push(`tags: [${tagList}]`);
  }

  lines.push(`featured: ${featured ? "true" : "false"}`);
  lines.push("---", "", "## Draft", "", "Write here.");

  return lines.join("\n");
}

/**
 * Parse CLI arguments into a config object.
 * @param {string[]} argv
 * @returns {{
 *   title?: string,
 *   summary?: string,
 *   date?: string,
 *   slug?: string,
 *   tags: string[],
 *   featured: boolean,
 *   dir?: string,
 *   help: boolean
 * }}
 */
export function parseArgs(argv) {
  const result = {
    tags: [],
    featured: false,
    help: false,
  };
  const positionals = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      result.help = true;
      continue;
    }

    if (arg === "--featured") {
      result.featured = true;
      continue;
    }

    if (arg === "--no-featured") {
      result.featured = false;
      continue;
    }

    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = argv[index + 1];

      if (value === undefined) {
        throw new Error(`Missing value for ${arg}.`);
      }

      index += 1;

      switch (key) {
        case "title":
          result.title = value;
          break;
        case "summary":
          result.summary = value;
          break;
        case "date":
          result.date = value;
          break;
        case "slug":
          result.slug = value;
          break;
        case "tags":
          result.tags = value
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);
          break;
        case "dir":
          result.dir = value;
          break;
        default:
          throw new Error(`Unknown option: --${key}.`);
      }

      continue;
    }

    positionals.push(arg);
  }

  if (!result.title && positionals[0]) {
    result.title = positionals[0];
  }

  if (!result.summary && positionals[1]) {
    result.summary = positionals[1];
  }

  return result;
}

/**
 * Write a new post file without overwriting existing content.
 * @param {string} filePath
 * @param {string} content
 * @returns {Promise<void>}
 */
export async function writePostFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, { encoding: "utf8", flag: "wx" });
  } catch (error) {
    if (error && error.code === "EEXIST") {
      throw new Error(`File already exists: ${filePath}`);
    }

    throw error;
  }
}

/**
 * Create a new blog post file based on CLI args.
 * @param {string[]} argv
 * @returns {Promise<number>}
 */
export async function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);

  if (args.help) {
    console.log(USAGE.trim());
    return 0;
  }

  const title = args.title?.trim();
  const summary = args.summary?.trim();

  if (!title || !summary) {
    throw new Error("Title and summary are required.");
  }

  const date = args.date ?? getLocalDateString();

  if (!DATE_FORMAT.test(date)) {
    throw new Error("Date must be in YYYY-MM-DD format.");
  }

  const slug = args.slug ?? slugify(title);

  if (!slug) {
    throw new Error("Unable to infer slug. Provide --slug explicitly.");
  }

  const outputDir = args.dir ? path.resolve(args.dir) : DEFAULT_OUTPUT_DIR;
  const fileName = `${date}-${slug}.md`;
  const filePath = path.join(outputDir, fileName);
  const content = buildPostContent({
    title,
    summary,
    date,
    tags: args.tags,
    featured: args.featured,
  });

  await fs.mkdir(outputDir, { recursive: true });
  await writePostFile(filePath, content);

  console.log(`Created ${path.relative(process.cwd(), filePath)}`);
  return 0;
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  main().catch((error) => {
    console.error(error.message);
    console.error("\n" + USAGE.trim());
    process.exitCode = 1;
  });
}
