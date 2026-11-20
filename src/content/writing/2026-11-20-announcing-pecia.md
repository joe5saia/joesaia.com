---
title: "Announcing Pecia"
date: 2026-11-20
summary: "An agent-native, markdown-based knowledge base built on Cloudflare Artifacts"
featured: false
draft: false
---

I'd like to share [Pecia](https://github.com/joe5saia/Pecia), an agent-native, markdown-based knowledge base built on Cloudflare Artifacts. The name comes from how medieval universities copied books: one checked master copy, rented out piece by piece. I asked Claude to make a fun explainer [here](https://joesaia.com/pecia/).

## Why

Agents are very good at git, and at efficiently searching and using documentation stored as files. That pushes us toward markdown files in a repo as the medium for our documents. This has a few drawbacks:

1. Markdown deserves first class viewing experience. Most IDEs, coding harnesses and git hosting tools are not good at displaying markdown, let alone a knowledge base of linked markdown files.
2. Notes outlive code. A session's code may get thrown away, but its notes are often worth keeping. They need a home beyond any single session.
3. Knowledge spans repos. Your Effect best practices belong in one place, but today that means vendoring a separate repo into every project or copying the same instructions into each one.
4. Information needs to be segregated. We often do not want the private docs visible in a public repo.

Building the knowledge base as its own layer of markdown files lets agents read, search and edit documents natively while keeping it out of the broader repo's git history. It also lets us build a richer markdown experience, with things like comments that let you interact with your agent directly in the documents.

A central knowledge base that your agents can reach unlocks some nice workflow simplifications. If you work across different harnesses or machines, keeping a global AGENTS.md file in sync is a hassle. Moving that information into the knowledge base, where it's loaded on demand, eliminates the syncing problem. It also gives your agents a place to store information that's useful across repos and projects without building a memory system into your harness.

Finally, there's information we want to share with our agents that isn't tied to any one codebase. This could be background writing on a hypothetical project you may or may not take on, or a strategy document you want your agents to have. I've never found a good agent-native way to share these kinds of documents.

## What it is

At its core, Pecia is a knowledge base of markdown files, versioned with git. On top of that is a web editor for humans to read the documentation, and an MCP server that agents use to manage the lifecycle of the knowledge base beyond creating, editing and deleting files and that supports supplying the skills and instructions agents need to use Pecia. A future goal is to let agents work with the knowledge base entirely through MCP, for agents that lack a full execution environment.

It's built on Cloudflare Artifacts, which provides a scalable and cheap git-compatible storage layer, with Workers and Durable Objects on top of it for managing the rest of the lifecycle and serving the frontend.

## Try it

The code is on [GitHub](https://github.com/joe5saia/Pecia) under Apache 2.0, and it runs on your own Cloudflare account. The [deploy guide](https://github.com/joe5saia/Pecia/blob/main/docs/deploy.md) takes you from an empty account to a working install in about an hour. You'll need the Workers Paid plan ($5 a month) and a domain on Cloudflare, and Artifacts is still in beta. Once it's deployed, add its `/mcp` URL to your harness as a remote MCP server and sign in. The server gives your agent the skills it needs from there. If you try it, I'd love to hear how it goes, especially where your agents trip up. Reach out to me on X at [@Joseph\_myke](https://x.com/Joseph_myke) or [open a GitHub issue](https://github.com/joe5saia/Pecia/issues). This project is less than a week old and written almost entirely by Claude so expect some rough edges.

## Acknowledgements

The core concept is broadly inspired by Mario Zechner's [Jot](https://github.com/badlogic/jot). I see Pecia as a way to scale Jot's collaboration model to agents in different environments and across repos, without needing to manage any local infrastructure. The idea of a central knowledge base of best practices that agents draw on was inspired by Cloudflare's [Engineering Codex](https://blog.cloudflare.com/internal-ai-engineering-stack/).
