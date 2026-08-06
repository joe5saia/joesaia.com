# SaiaAI Design System

The brand and UI system for **SaiaAI** — a boutique software consultancy in **West Orange, NJ**, led by **Joe Saia**, serving small businesses across Essex County (Livingston, South Orange, and beyond).

> Practical software for Essex County businesses. Senior engineering judgment for small-business problems.

This system encodes SaiaAI's premium-but-approachable visual language: a warm cream canvas, deep ink navy, and a single restrained gold accent, set in a serif display face (Cormorant Garamond) over a clean grotesque body (Hanken Grotesk).

## Sources
- **GitHub:** [`joe5saia/saiaai_website`](https://github.com/joe5saia/saiaai_website) — the production Hugo marketing site. Tokens, components, and the website UI kit are derived directly from its `assets/css/main.css`, `layouts/`, and `content/`. Explore it for deeper fidelity (additional service pages, schema/SEO partials, palette prototypes).
- Live site: **saiaai.dev**

---

## Content fundamentals

How SaiaAI writes:
- **Voice:** Calm, senior, plain-spoken. Confident without hype. Reads like an experienced engineer who respects the reader's time and money.
- **Person:** Refers to the practice in the **third person** as "SaiaAI" and the founder as "Joe" / "Joe Saia." Addresses the reader as **"you" / "your business."** Never "we."
- **Casing:** Sentence case everywhere in prose and headings. Eyebrows/labels and buttons are **UPPERCASE** with wide letter-spacing. Headlines often end with a period ("Practical software for Essex County businesses.").
- **Vocabulary themes:** *understand · practical · high-leverage · boutique · maintainable · avoid unnecessary spend · smallest useful solution.* The throughline is understanding the business first, then building only what creates real leverage.
- **Emoji:** None. No exclamation-driven marketing energy, no emoji, no trend-chasing.
- **Local proof:** Place names recur as trust signals — West Orange, Essex County, Livingston, South Orange.
- **Example copy:**
  - Eyebrow → headline: *"How SaiaAI works" → "Approachable consulting with premium technical execution."*
  - Lead: *"Good software work starts with understanding the business. SaiaAI looks for the smallest high-quality solution that creates real leverage."*
  - CTA labels: *"Email Joe", "Schedule a consultation".*

---

## Visual foundations

- **Palette:** Warm **cream** canvas (`#F4F2EC`) with a slightly lighter cream for surfaces (`#FAF8F2`). Text and dark sections use deep **ink navy** (`#15233A` / `#16263D`). One accent only: muted **gold** (`#C2A45F`), used sparingly for eyebrows, numerals, underlines, focus rings, and hairline highlights — never as large fills. Secondary text is slate **muted** (`#5E6B7C`); on dark, **mist** (`#A8B2C2`). Hairlines are warm taupe (`#E2DDD0`).
- **Background:** The page body is not flat — it layers two faint radial glows (top-left, right) plus a single diagonal sheen over cream. Dark sections are solid ink. Section alternation is cream → cream-2 → ink for rhythm; never more than these.
- **Type:** Display/headings in **Cormorant Garamond** at weight **500** (medium), tight negative tracking (`-0.02` to `-0.025em`), line-height ~1.02 — large and editorial (hero h1 up to 7rem fluid). Body, eyebrows, labels, buttons in **Hanken Grotesk** (400/500/600). Eyebrows are 0.77rem, 600, `0.28em` tracking, uppercase, gold.
- **Spacing & layout:** 1120px max container; generous fluid section padding (`clamp(4rem,8vw,7rem)`). Two-column asymmetric grids (`1.2fr / 0.8fr`) for hero, process, CTA. Lots of breathing room.
- **Corners:** Surfaces use soft radii — **18px** (lg), 12px (md), 8px (sm), 999px pills. **Buttons are deliberately square (0 radius)** — this is a signature: square uppercase buttons against rounded cards.
- **Cards:** Hairline border (`#E2DDD0`) + 18px radius + warm cream fill (`rgba(250,248,242,0.92)`) + one **soft long shadow** (`0 24px 70px rgba(22,38,61,0.11)`). Optional ink→gold→ink gradient "topline" bar. No heavy borders, no colored left-accent strips.
- **Shadows:** A single soft, large, low-opacity navy shadow system. Buttons get a tighter `0 16px 36px`. Header gets `0 10px 30px` once scrolled.
- **Borders:** Hairline 1px, warm taupe or translucent gold (`rgba(194,164,95,0.24–0.34)`). Gold borders signal interactive/keyword chips.
- **Buttons:** Square, uppercase, `0.08em` tracking. Primary = ink fill + soft shadow. Ghost = gold-outlined translucent cream. Hover lifts `translateY(-1px)` — no color change.
- **Animation & states:** Restrained. 160–180ms ease transitions. Hover = subtle lift (buttons) or arrow slide (text links) or gold wash (nav links) — never large movement, no bounce. Press states inherit hover. Sticky header fades in border + shadow past 8px scroll. `prefers-reduced-motion` respected.
- **Transparency & blur:** The sticky header uses `backdrop-filter: blur(18px)` over translucent cream. Cards and chips use slightly translucent cream fills so the page glow shows through.
- **Imagery vibe:** Warm, light, editorial. The brand mark is a navy roundel with a gold compass/triangle motif on cream. No photography in the base system (the site incorporates client photos when available).
- **Focus:** Visible 3px gold outline, 4px offset — accessibility is a stated value.

---

## Iconography

- The system ships **no icon font and almost no icons** — it is intentionally typographic. UI affordances are drawn with type: the text-link arrow is a literal **"→" character**, process steps use **numerals (01/02/03)** in gold rather than icons.
- **Brand lockup:** the brand signature is the **`Logo`** — the **North Star** `BrandMark` (a gold four-point guiding star with a single twinkle, evoking wayfinding: *understand, then guide*) locked up with the serif wordmark ("Saia" + gold "AI"). Use `<Logo>` for the full signature, `<BrandMark solo>` for favicons/avatars, `<Wordmark>` for text-only. Never recreate the logotype ad hoc.
- **Emoji:** Never used.
- **If you need a UI icon set** that the brand lacks (e.g. for an app surface), use **Lucide** (thin 1.5–2px stroke, rounded) — it matches the restrained, refined tone. Flag any such addition as a substitution, since the source brand has none.

---

## Index / manifest

**Root**
- `styles.css` — entry point; `@import`s all token files (link this one file).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (Google Fonts import).
- `assets/` — (logo is code: see the `Logo` / `BrandMark` components; the website favicon is an inline SVG data-URI).
- `SKILL.md` — Agent-Skill wrapper.

**Components** (`window.SaiaAIDesignSystem_ac1fa8.*`)
- `components/core/` — `Logo`, `BrandMark`, `Wordmark`, `Button`, `Eyebrow`, `TextLink`, `Badge`
- `components/surfaces/` — `Card`, `ServiceCard`
- `components/forms/` — `Input`

**UI kits**
- `ui_kits/website/` — full SaiaAI marketing homepage recreation.

**Foundations** — specimen cards in `guidelines/` (Colors, Type, Spacing, Brand incl. **Wordmark** and a **Voice & Tone** card) render in the Design System tab.

### A note on tokens
The palette is deliberately tiny: **one ink** (`--color-ink #16263D`, used for both text and dark surfaces), **one accent** (`--color-gold #C2A45F`), warm cream surfaces, plus muted slate / mist / hairline neutrals. Earlier duplicate inks/golds were collapsed — always reference the semantic aliases (`--text-body`, `--surface-card`, `--accent`).

### Note on fonts
Hanken Grotesk and Cormorant Garamond are loaded from **Google Fonts** via `@import` in `tokens/fonts.css` (matching the production stack of named webfonts with system fallbacks). No binary font files are bundled; if you need self-hosted/offline fonts, download both families and swap the `@import` for local `@font-face` rules.
