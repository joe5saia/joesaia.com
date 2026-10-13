---
name: "Hearth"
type: "Household product & applied AI"
stack: ["React", "TypeScript", "Cloudflare", "MCP"]
repo: "https://github.com/joe5saia/hearth"
highlights:
  - "A connected recipe library, weekly meal planner, grocery catalog, and shopping list with duplicate-aware recipe-to-list selection."
  - "AI-assisted ingredient matching with Jev AI: normalize recipe text, retrieve catalog candidates, review suggestions, and save reusable matches."
  - "An OAuth-protected Model Context Protocol (MCP) server lets AI assistants use the same household data and validation as the website."
portfolio:
  order: 1
  summary: "One household. From recipe to shopping list."
  engineering: "Make AI useful without making it the source of truth. Matching combines language models with lexical catalog retrieval, cached decisions, explicit review, and guarded writes that avoid overwriting newer edits."
  layers:
    - name: "Interface"
      tools: "React · TypeScript · Vite · Effect"
    - name: "Application & data"
      tools: "Cloudflare Workers · D1/SQLite · Workers AI · Jev AI"
    - name: "Agent access & verification"
      tools: "MCP SDK · OAuth · Cloudflare Access · Vitest · Miniflare"
  evidence:
    label: "Background matching & guarded saves"
    url: "https://github.com/joe5saia/hearth/commit/a4a40e0cfce2fc4f030a028cdc7508bacc524f19"
---

A meal management web app designed to streamline planning, shopping, and cooking, using AI to smooth out recipe ingestion and grocery list building.
