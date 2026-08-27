# Foundations

## Accessibility baseline

The target is WCAG 2.2 AA for authored pages and components.

- Use semantic HTML and preserve a logical heading order.
- All interactive elements must be usable with a keyboard and expose a visible
  amber focus indicator.
- Do not communicate state by color alone. Pair color with text, structure, or
  a native state.
- Body copy should remain readable at 200% zoom and layouts must reflow at a
  320 CSS-pixel viewport without horizontal page scrolling.
- Decorative SVG and glyphs use `aria-hidden="true"`. Informative graphics need
  a text alternative; complex charts also need an equivalent table or summary.
- Motion must honor `prefers-reduced-motion: reduce`.
- Interactive controls target at least 44 × 44 CSS pixels when presented as
  standalone controls. Inline text links are exempt.

## Color

The site is intentionally dark-only. A light theme is not planned; adding one is
a product decision, not an automatic token inversion.

| Role           | Token                     | Value            | Use                                       |
| -------------- | ------------------------- | ---------------- | ----------------------------------------- |
| Canvas         | `--color-surface`         | `#070d10`        | Page background                           |
| Raised         | `--color-surface-raised`  | `#0b161d`        | Code and grouped content                  |
| Overlay        | `--color-surface-overlay` | `#11222a`        | Controls and emphasized surfaces          |
| Primary text   | `--color-text-primary`    | `#eee6d8`        | Body text on dark surfaces                |
| Heading text   | `--color-text-heading`    | `#f6efe3`        | Display and heading text                  |
| Secondary text | `--color-text-secondary`  | `#a9b2b3`        | Supporting copy                           |
| Muted text     | `--color-text-muted`      | `#778487`        | Metadata; not for critical small text     |
| Accent         | `--color-accent`          | `#d47a3b`        | Section markers and non-critical emphasis |
| Interactive    | `--color-accent-hover`    | `#f2a44f`        | Links, hover, focus, active markers       |
| Hairline       | `--color-border`          | translucent bone | Passive dividers                          |
| Strong line    | `--color-border-hover`    | translucent bone | Boundaries and hover state                |

Measured against the `#070d10` canvas, primary text is 15.78:1, heading text
17.11:1, secondary text 9.04:1, muted text 5.06:1, copper 6.19:1, and amber
9.50:1. Ink on copper is also 6.19:1. These supported pairings meet WCAG AA
for normal text; translucent borders are structural and never carry meaning
alone.

### Color rules

- Bone is the default readable foreground on ink.
- Amber is the interactive signal and focus color.
- Copper is structural. Do not use copper for small essential text where amber
  provides stronger contrast.
- Muted text is supplementary only. Prefer secondary text for paragraphs.
- Never place amber or copper as a large background field.
- Error, success, and warning colors do not exist because the current product
  has no validation or system-feedback UI. Add them only with a real use case and
  contrast evidence.

## Typography

The system uses locally available font stacks: no render-blocking webfont
request and no layout shift from a late font swap.

| Role    | Family                               | Token            | Notes                          |
| ------- | ------------------------------------ | ---------------- | ------------------------------ |
| Display | Iowan Old Style → Palatino → Georgia | `--font-display` | Editorial headings, weight 400 |
| Body    | Inter → system UI                    | `--font-body`    | Copy, labels, controls         |
| Code    | System monospace                     | `--font-mono`    | Inline and block code          |

Display type is fluid and tightly tracked. Body copy remains at least 1rem with
line-height 1.65. Long-form writing is constrained to `--reading-width` (43rem)
and uses a slightly more generous line-height. Labels are uppercase, compact,
and letter-spaced; do not use that treatment for sentences.

## Layout

- **Unit:** `rem` for type and spacing; percentages, grid fractions, and
  `clamp()` for fluid layout; pixels only for hairlines and exact asset sizes.
- **Spacing:** a four-pixel base scale (`--space-1` through `--space-10`). Prefer
  tokens; fluid section spacing may interpolate between adjacent scale values.
- **Grid:** twelve columns for wide editorial compositions. Collapse to a
  single reading flow rather than preserving ornamental columns on small screens.
- **Containers:** 92rem page, 78rem content, 43rem reading measure.
- **Gutters:** fluid from 1.25rem to 4.5rem.
- **Breakpoints:** 64rem for wide-layout simplification, 52rem for navigation or
  two-column collapse, and 44rem for the primary mobile reflow. Add a breakpoint
  only where content fails, not for a named device.

## Shape, borders, and elevation

The primary site language is square and line-based. Controls use square corners;
focus rings may use a 2px radius to avoid visual clipping. Rounded surfaces are
reserved for asset previews, not general editorial layout.

Hierarchy should come from spacing, background shifts, and one-pixel dividers
before shadows. The sticky header may use `--shadow-header`; focus treatment uses
`--shadow-focus`. Avoid stacks of arbitrary shadow values.

Z-index levels are named: below (`-1`), base (`0`), content (`1`), header (`50`),
and skip link (`100`). Do not introduce an unbounded z-index.

## Motion

- Fast interaction feedback: `--duration-fast` (160ms).
- Deliberate transitions: `--duration-medium` (240ms).
- Ambient current loop: `--duration-ambient` (14.5s).
- Default easing: `--ease-standard`.
- Hover movement is limited to 2px. No bounce or parallax.
- Loading motion communicates state; ambient motion is decorative and can stop.
- The global reduced-motion rule effectively removes animation and smooth scroll.

## Iconography and imagery

The interface is deliberately icon-light. Arrows (`→`, `↗`, `↓`) communicate
direction; a diamond (`◆`) marks a fixed location. These glyphs inherit text
color and size and are hidden from assistive technology when adjacent text gives
the same meaning.

Use custom SVG only when a glyph cannot communicate the concept. SVG uses a
24 × 24 coordinate grid, `currentColor`, a 1.5–2px stroke, rounded line caps, and
an explicit accessible name only when informative. Reserved meanings:

| Symbol | Meaning                                  | Keywords                |
| ------ | ---------------------------------------- | ----------------------- |
| `→`    | Continue or follow                       | next, continue, forward |
| `↗`    | Navigate or open an external destination | open, visit, external   |
| `↓`    | Download                                 | download, save          |
| `◆`    | Fixed place or point                     | location, marker, point |

Images require accurate `alt`, intrinsic `width` and `height`, and an aspect ratio
that matches the file. Decorative images use empty alt text. Prefer Astro's image
pipeline for future content images that need responsive density variants. Brand
assets and usage are reviewed on the existing private `/brand-assets/` route.
