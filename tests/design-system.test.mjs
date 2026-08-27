import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const checklistPath = new URL("../design-system/CHECKLIST.md", import.meta.url);
const tokensPath = new URL("../design-system/tokens.css", import.meta.url);

function checklistItems(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^\| `(?:dl|df|c|m)-/.test(line))
    .map((line) =>
      line
        .split("|")
        .slice(1, -1)
        .map((column) => column.trim()),
    )
    .map(([rawId, , status]) => ({
      id: rawId.slice(1, -1),
      status,
    }));
}

test("design-system checklist accounts for all source items", async () => {
  const markdown = await readFile(checklistPath, "utf8");
  const items = checklistItems(markdown);
  const ids = items.map(({ id }) => id);
  const counts = {
    designLanguage: ids.filter((id) => id.startsWith("dl-")).length,
    foundations: ids.filter((id) => id.startsWith("df-")).length,
    components: ids.filter((id) => id.startsWith("c-")).length,
    maintenance: ids.filter((id) => id.startsWith("m-")).length,
  };

  assert.equal(items.length, 230);
  assert.equal(new Set(ids).size, items.length, "checklist IDs must be unique");
  assert.deepEqual(counts, {
    designLanguage: 10,
    foundations: 26,
    components: 166,
    maintenance: 28,
  });
});

test("design tokens expose the documented semantic foundations", async () => {
  const tokens = await readFile(tokensPath, "utf8");
  const requiredTokens = [
    "--color-surface",
    "--color-text-primary",
    "--color-accent-hover",
    "--font-display",
    "--space-4",
    "--page-width",
    "--shadow-header",
    "--z-header",
    "--duration-fast",
    "--focus-color",
  ];

  for (const token of requiredTokens) {
    assert.match(tokens, new RegExp(`${token}:`), `missing ${token}`);
  }
});

test("production styles consume the design-system token source", async () => {
  const [globalStyles, homepage] = await Promise.all([
    readFile(new URL("../src/styles/global.css", import.meta.url), "utf8"),
    readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8"),
  ]);

  assert.match(globalStyles, /design-system\/tokens\.css/);
  assert.match(homepage, /design-system\/tokens\.css/);
  assert.doesNotMatch(globalStyles, /\.theme-(?:button|tag)\b/);
});
