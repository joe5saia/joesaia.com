# 0001: Keep the system site-scoped

- Status: accepted
- Date: 2026-08-27

## Context

The checklist includes broad product-interface components and maintenance
processes. Joe Saia's portfolio is a single Astro site with no external design
system consumers and no application workflow.

## Decision

Build a site-scoped system: production tokens, a small set of used primitives,
site compositions, a visual catalog, and explicit content and maintenance rules.
Audit every checklist item, but mark components without a real product use case
as not applicable rather than implementing speculative UI.

## Consequences

The system is smaller, easier to maintain, and tied to actual content. It is not
an npm package or a general-purpose UI kit. A future application or second
consumer must revisit packaging, theme support, and the component roadmap.
