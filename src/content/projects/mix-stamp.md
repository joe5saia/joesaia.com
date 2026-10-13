---
name: "Mix Stamp"
type: "Cocktail notebook & cross-device sync"
stack: ["SwiftUI", "React", "TypeScript", "Cloudflare"]
website: "https://mixstamp.com/"
highlights:
  - "Structured cocktail recipes and variations with quantities, preparation steps, garnish, source attribution, and ingredient scaling on the web."
  - "A searchable personal journal: find drinks by name or ingredient, save favorites, and record dated made-stamps and tasting notes."
  - "An offline-editable native notebook with incremental synchronization, alongside an online web app with shared-book administration, preset imports, and JSON backups."
  - "OAuth-protected MCP tools let AI assistants search, create, and edit recipes through the same permissions and revision checks as the apps."
portfolio:
  order: 3
  summary: "A good drink. A recipe worth keeping."
  engineering: "Treat offline edits as durable work. The native client commits local changes and outbox entries together, then synchronizes idempotent mutations against an ordered server journal. Server revisions resolve conflicts without relying on device clocks."
  layers:
    - name: "Native & web"
      tools: "Swift · SwiftUI · Core Data · React · TypeScript · Vite"
    - name: "API & synchronization"
      tools: "Effect · Cloudflare Workers · SQLite Durable Objects"
    - name: "Identity, integrations & verification"
      tools: "WorkOS AuthKit · OAuth · MCP · Vitest · Playwright · Swift tests"
---

A personal cocktail notebook for home-bar enthusiasts: keep the recipe, the variation, and the memory of making it. Mix Stamp combines a React web app with an offline-first SwiftUI client and a shared transactional backend. The web app is available now; the iPhone app is under App Store review.
