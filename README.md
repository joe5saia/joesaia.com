# Joe Saia — Portfolio & Blog

Personal portfolio site showcasing data engineering and analytics leadership experience, with a lightweight blog.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deploys to [Cloudflare Pages](https://pages.cloudflare.com).

## Quick Start

```bash
task install
task dev
```

Open [http://localhost:4321](http://localhost:4321)

## Commands

| Command                                 | Action                                      |
| :-------------------------------------- | :------------------------------------------ |
| `task install`                          | Install npm dependencies                    |
| `task dev`                              | Start dev server                            |
| `task build`                            | Build for production (`dist/`)              |
| `task preview`                          | Preview production build locally            |
| `task test`                             | Run unit tests                              |
| `task post TITLE="Post Title" SUMMARY="Brief description."` | Scaffold a new blog post |
| `task clean`                            | Remove build artifacts (`dist/`, `.astro/`) |
| `task deploy`                           | Build and deploy to Cloudflare Pages        |
| `task lint`                             | Type-check with `astro check`               |

Task commands are defined in `Taskfile.yml`.

## Project Structure

```
src/
  components/       # Header, Footer, PostCard, ProjectCard, ProofBar
  content/
    config.ts       # Content collection schemas (writing, projects)
    writing/        # Blog posts (Markdown, YYYY-MM-DD-slug.md)
    projects/       # Project entries (Markdown)
  layouts/          # BaseLayout, PostLayout
  pages/            # Routes: /, /writing/, /projects/, /resume/, /contact/
  styles/           # global.css (Tailwind v4)
scripts/
  create-post.mjs   # CLI helper to scaffold new blog posts
tests/
  create-post.test.mjs  # Unit tests for the create-post script
public/             # Static assets (resume PDF, favicon.svg, robots.txt)
```

## Adding Content

### New blog post

Use the scaffolding script:

```bash
task post TITLE="Post Title" SUMMARY="Brief description."
```

Or create `src/content/writing/YYYY-MM-DD-slug.md` manually:

```yaml
---
title: "Post Title"
date: 2025-01-15
summary: "Brief description."
tags: ["Tag1", "Tag2"]
featured: true
---
Post content here...
```

### New project

Create `src/content/projects/project-name.md`:

```yaml
---
name: "Project Name"
type: "Open Source Package"
stack: ["Python", "SQL"]
repo: "https://github.com/username/repo"
highlights:
  - "Key feature or impact"
  - "Another highlight"
---
Optional description...
```

## Deployment

Configured for Cloudflare Pages:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `main`

## License

MIT
