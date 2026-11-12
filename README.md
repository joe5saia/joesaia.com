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

| Command                                                     | Action                                      |
| :---------------------------------------------------------- | :------------------------------------------ |
| `task install`                                              | Install npm dependencies                    |
| `task dev`                                                  | Start dev server                            |
| `task build`                                                | Build for production (`dist/`)              |
| `task preview`                                              | Preview production build locally            |
| `task test`                                                 | Run unit tests                              |
| `task post TITLE="Post Title" SUMMARY="Brief description."` | Scaffold a new blog post                    |
| `task clean`                                                | Remove build artifacts (`dist/`, `.astro/`) |
| `task deploy`                                               | Build and deploy to Cloudflare Pages        |
| `task lint`                                                 | Type-check with `astro check`               |

Task commands are defined in `Taskfile.yml`.

## Project Structure

```
src/
  components/       # Header, Footer, PostCard, ProofBar
  content/
    config.ts       # Content collection schemas (writing, projects)
    writing/        # Blog posts (Markdown, YYYY-MM-DD-slug.md)
    projects/       # Archived project entries (not exposed as a route)
  layouts/          # BaseLayout, PostLayout
  pages/            # Routes: /, /writing/, /resume/, /contact/
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

### Editing posts

`task editor` starts a small editor at [http://localhost:4322](http://localhost:4322) for the posts in `src/content/writing/`. It lists drafts (`draft: true`) first, saves the Markdown file as is, and shows review notes from `.amp/blog-review/` that you can apply or dismiss. **New post** asks for a title and summary and creates `YYYY-MM-DD-slug.md` as a draft with frontmatter only, the same way `task post` names and dates it, then opens it. In an Amp orb it runs as the `editor` service.

## Deployment

Configured for Cloudflare Pages:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `main`

## License

MIT

## GitHub Actions resource policy — October 26, 2026

Actions is deployment-only: `ci.yml` and the duplicate tests in `deploy-pages.yml`
are removed. Main pushes and existing manual deployment remain; Astro builds `dist`
once for Pages. Deployments now serialize without cancelling active uploads and have
a 15-minute limit. Test sources remain: run `task test`, `task lint`, and `task build`
locally or in an Amp orb before shipping, not in Actions.

No deployment or paid cloud validation was triggered by the audit. On November 1 or
later, after release authorization, verify the exact revision's Pages upload and
public site; this remains deferred, not scheduled. An administrator must inspect
classic branch protection before adoption because the audit token cannot read it;
do not leave a required `build-and-test` check orphaned or bypass security settings.
