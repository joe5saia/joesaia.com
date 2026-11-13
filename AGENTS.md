# AGENTS.md

## Project Overview

Static portfolio site with blog, built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deploys to Cloudflare Pages.

## Commands

```bash
task install        # Install npm dependencies
task dev            # Start dev server (http://localhost:4321)
task build          # Build for production (output: dist/)
task preview        # Preview production build locally
task test           # Run unit tests (node --test)
task post TITLE="My Title" SUMMARY="A summary"  # Scaffold a new blog post
task clean          # Remove build artifacts (dist/, .astro/)
task deploy         # Build and deploy to Cloudflare Pages
task lint           # Type-check the project with astro check
```

## Project Structure

```
src/
  components/       # Reusable Astro components (Header, Footer, PostCard, ProjectCard, ProofBar)
  content/
    config.ts       # Content collection schemas (writing, projects)
    writing/        # Blog posts as Markdown (YYYY-MM-DD-slug.md)
    projects/       # Project entries as Markdown
  layouts/          # BaseLayout.astro, PostLayout.astro
  pages/            # File-based routing (/, /writing/, /projects/, /resume/, /contact/)
  styles/           # global.css with Tailwind v4 (@import "tailwindcss")
scripts/
  create-post.mjs   # CLI helper to scaffold new blog posts
tests/
  create-post.test.mjs  # Unit tests for the create-post script
public/             # Static assets (resume PDF, favicon.svg, robots.txt)
```

## Content Collections

### Writing (`src/content/writing/`)

Frontmatter schema:

```yaml
title: string (required)
date: date (required)
summary: string (required)
tags: string[] (optional)
featured: boolean (optional, default: false)
canonical: string (optional)
```

### Projects (`src/content/projects/`)

Frontmatter schema:

```yaml
name: string (required)
type: string (required)
stack: string[] (required)
repo: url (required)
highlights: string[] (required)
```

## Blog Editor and Draft Review

Joe writes every post himself. On posts, Amp copy-edits and comments; it does not write or rewrite prose. Unpublished posts have `draft: true` in their frontmatter.

- `editor/server.mjs` is a small editor for `src/content/writing/`. In an orb it runs as the `editor` service in `.amp/services.yaml` (`amp orb services ensure`); locally, `task editor`.
- To review a post, do not edit the post file. Write notes to `.amp/blog-review/<post file name without .md>.json`, which the editor shows beside the post within a few seconds. The file is a JSON array; append to it and keep earlier entries:

  ```json
  [
    {
      "id": "3",
      "quote": "The odds is that",
      "suggestion": "The odds are that",
      "note": "Subject-verb agreement."
    },
    {
      "id": "4",
      "quote": "a claim that needs support",
      "note": "Is there an example you could point to?"
    }
  ]
  ```

  - `id`: unique within the file.
  - `quote`: exact text copied from the post, long enough to occur only once. The editor finds the note's place by this text.
  - `suggestion` (optional): replacement for `quote`, for copy edits such as spelling, grammar, punctuation, and typos. Joe applies or dismisses each one.
  - `note` (optional): the reason for a suggestion, or a comment or question with no suggestion.
  - `status`: set by the editor to `applied` or `dismissed` once Joe acts. Do not suggest a dismissed change again.
  - `replies` (optional): the conversation on a note, oldest first, as `{ "author": "Joe" | "Amp", "text": "...", "at": "<ISO time>" }`. Joe adds his from the editor's **Reply** button. When a note's last reply is Joe's, answer it by appending an `Amp` reply to that note's `replies`, keeping the earlier ones. If Joe's reply asks for a different edit, change that note's `suggestion` too.

- Joe can create a post from the editor's **New post** button, which writes a frontmatter-only draft (`POST /api/posts`). Otherwise scaffold posts with `task post`, then add `draft: true` until Joe publishes. Publishing means setting `draft: false` (or removing it) and committing, only when Joe asks.

## Code Conventions

- Use Astro components (`.astro`) for all UI
- Tailwind v4 for styling; no separate CSS files except global.css
- TypeScript strict mode enabled (`astro/tsconfigs/strict`)
- Keep components minimal; avoid unnecessary abstractions
- Content in Markdown with YAML frontmatter
- Unit tests use Node.js built-in test runner (`node:test` + `node:assert/strict`)

## Design Principles

- "Quiet luxury": typography-led, restrained palette, generous whitespace
- Max content width: ~780px for readability
- Mobile-first responsive design
- WCAG-friendly contrast and semantic HTML
