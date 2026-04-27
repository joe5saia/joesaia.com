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
