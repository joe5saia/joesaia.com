---
name: "Hearth"
type: "Household product & applied AI"
stack: ["React", "TypeScript", "Cloudflare", "MCP"]
repo: "https://github.com/joe5saia/hearth"
highlights:
  - "A connected recipe library, weekly meal planner, grocery catalog, and shopping list with duplicate-aware recipe-to-list selection."
  - "AI-assisted ingredient matching pipeline with Jev AI: normalize recipe text, retrieve catalog candidates, review suggestions, and save reusable matches."
  - "An OAuth-protected Model Context Protocol (MCP) server lets external AI assistants use the same household data and validation as the website."
portfolio:
  order: 1
  summary: "Household meal planning made easy."
  engineering: "Use AI to reduce the friction of meal planning, with a simple workflow for choosing meals, planning the week, shopping for ingredients, and cooking."
  layers:
    - name: "Interface"
      tools: "React · TypeScript · Vite · Effect"
    - name: "Application & data"
      tools: "Cloudflare Workers · D1/SQLite · Workers AI · Jev AI · EffectTS"
    - name: "Agent access & verification"
      tools: "MCP SDK · OAuth · Cloudflare Access · Vitest · Miniflare"
  evidence:
    label: "Background matching & guarded saves"
    url: "https://github.com/joe5saia/hearth/commit/a4a40e0cfce2fc4f030a028cdc7508bacc524f19"
---

A meal management web app designed to streamline planning, shopping, and cooking, using AI to smooth out recipe ingestion and grocery list building.
