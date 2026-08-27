# Joe Saia design system

The production design language for [joesaia.com](https://joesaia.com): dark,
editorial, precise, and quietly technical. The system turns the site's existing
visual language into reusable tokens, components, content rules, and maintenance
practices without introducing a second brand.

## Start here

1. Read [foundations.md](foundations.md) before making visual changes.
2. Read [content.md](content.md) before writing interface copy.
3. Reuse a component from [components/](components/) before adding a new pattern.
4. Follow [maintenance.md](maintenance.md) when changing the system.
5. Use [CHECKLIST.md](CHECKLIST.md) to understand coverage and deliberate gaps.

The private `/design-system/` route renders the visual catalog. It is excluded
from search indexing and the sitemap.

## Structure

```text
design-system/
├── README.md                 # Entry point and scope
├── tokens.css                # Production token source of truth
├── foundations.md            # Color, type, layout, motion, icons, accessibility
├── content.md                # Voice, terminology, writing, and microcopy
├── components.md             # Inventory, usage, anatomy, and contracts
├── maintenance.md            # Contribution, support, release, and browser policy
├── CHECKLIST.md              # Exhaustive designsystemchecklist.com audit
├── CHANGELOG.md              # User-visible system changes
├── Showcase.astro            # Private visual catalog
├── components/               # Reusable Astro primitives
├── decisions/                # Lightweight architecture decision records
└── templates/                # Change and feature proposal templates
```

## Principles

### Editorial before ornamental

Typography, pacing, and structure do most of the visual work. Decoration should
clarify hierarchy or reinforce the current motif; it should not compete with the
content.

### Warmth inside rigor

Ink surfaces and precise grids establish rigor. Bone text, copper accents, serif
display type, and restrained ambient movement keep the experience human.

### One signal at a time

Copper identifies structure. Amber identifies interaction or emphasis. Do not
introduce another accent color to solve a local problem.

### Native semantics first

Use the correct HTML element before adding ARIA. Keyboard access, visible focus,
readable contrast, reduced motion, and reflow are requirements, not enhancements.

### Add only what the product needs

This is a portfolio, not a general-purpose application framework. A documented
native pattern is preferable to an unused component. The checklist's broad UI
inventory is audited, but irrelevant components are explicitly marked `n/a`.

## Using tokens

`src/styles/global.css` imports `tokens.css`, so every Astro page using
`BaseLayout` receives the system. The standalone homepage imports it directly.

```css
.example {
  border: var(--line-width) solid var(--color-border);
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  transition: color var(--duration-fast) var(--ease-standard);
}

.example:hover {
  color: var(--color-accent-hover);
}
```

Prefer semantic names such as `--color-text-secondary`. The short names
(`--mist`, `--copper`, and similar) are compatibility aliases for existing site
styles and should not be used by new design-system components.

## Status

Version: **1.0.0**  
Owner: **Joe Saia**  
Support: repository issues and pull-request discussion  
Target: current and previous major versions of Chrome, Safari, Firefox, and Edge

The system follows semantic versioning conceptually. Because it ships with the
site rather than as a package, releases are recorded in this directory's
[CHANGELOG.md](CHANGELOG.md) and land with the site release that consumes them.
