# Design system checklist audit

Audited on 2026-08-27 against
[Design System Checklist](https://www.designsystemchecklist.com/) and its
[source dataset](https://github.com/ardakaracizmeli/design-system-checklist/tree/main/src/data).
The source contains 230 items: 10 design-language, 26 foundation, 166 component,
and 28 maintenance items.

The checklist is a set of broad best practices, not a requirement to ship every
application component. This audit extends its binary checkbox model with three
statuses:

- `complete` — implemented in production or explicitly covered by a maintained
  system rule.
- `deferred` — relevant only after a known growth condition; the trigger is
  documented in the roadmap.
- `n/a` — deliberately outside this portfolio's current product scope.

Not-applicable items are decisions, not hidden backlog. Reassess them when the
site gains a workflow that needs the component.

Current disposition: **87 complete, 8 deferred, 135 not applicable**.

## Design language — 10

### Brand

| ID                     | Item              | Status   | Evidence or decision                                        |
| ---------------------- | ----------------- | -------- | ----------------------------------------------------------- |
| `dl-brand-vision`      | Vision            | complete | Product vision in `content.md`.                             |
| `dl-brand-principles`  | Design principles | complete | Five principles in `README.md`.                             |
| `dl-brand-tone`        | Tone of voice     | complete | Voice attributes and examples in `content.md`.              |
| `dl-brand-terminology` | Terminology       | complete | Canonical role, collection, and AI terms in `content.md`.   |
| `dl-brand-assets`      | Brand assets      | complete | Asset rules plus the private `/brand-assets/` review route. |

### Guidelines

| ID                          | Item                 | Status   | Evidence or decision                                                              |
| --------------------------- | -------------------- | -------- | --------------------------------------------------------------------------------- |
| `dl-guidelines-a11y`        | Accessibility        | complete | WCAG 2.2 AA baseline in `foundations.md`.                                         |
| `dl-guidelines-writing`     | Writing guidelines   | complete | Voice, casing, labels, dates, and link guidance in `content.md`.                  |
| `dl-guidelines-microcopy`   | Microcopy guidelines | complete | Empty, error, loading, disabled, download, and external-link rules.               |
| `dl-guidelines-terminology` | Terminology          | complete | Interface terminology is documented with the brand vocabulary.                    |
| `dl-guidelines-i18n`        | Internationalisation | complete | English-only scope, locale-aware dates, and future-locale constraints documented. |

## Foundations — 26

### Color

| ID                    | Item            | Status   | Evidence or decision                                             |
| --------------------- | --------------- | -------- | ---------------------------------------------------------------- |
| `df-color-a11y`       | Accessibility   | complete | Semantic foreground roles and contrast-use constraints.          |
| `df-color-semantic`   | Semantic colors | complete | Production roles in `tokens.css`; no component-only color names. |
| `df-color-dark-mode`  | Dark mode       | complete | Dark-only product decision documented; `color-scheme: dark` set. |
| `df-color-guidelines` | Guidelines      | complete | Color table and usage rules in `foundations.md`.                 |

### Layout

| ID                      | Item        | Status   | Evidence or decision                                           |
| ----------------------- | ----------- | -------- | -------------------------------------------------------------- |
| `df-layout-units`       | Units       | complete | rem/fluid/pixel policy documented.                             |
| `df-layout-grid`        | Grid        | complete | Twelve-column editorial grid and collapse behavior documented. |
| `df-layout-breakpoints` | Breakpoints | complete | Content-driven 64rem, 52rem, and 44rem breakpoints.            |
| `df-layout-spacing`     | Spacing     | complete | Four-pixel token scale in `tokens.css` and visual catalog.     |

### Typography

| ID                          | Item           | Status   | Evidence or decision                                        |
| --------------------------- | -------------- | -------- | ----------------------------------------------------------- |
| `df-typography-mobile`      | Responsiveness | complete | Fluid display scales and mobile specimens.                  |
| `df-typography-grid`        | Grid relation  | complete | Reading measure and type/layout roles documented.           |
| `df-typography-readability` | Readability    | complete | 1rem body, 1.65 leading, 43rem measure.                     |
| `df-typography-performance` | Performance    | complete | Local system stacks avoid font network requests and swaps.  |
| `df-typography-guidelines`  | Guidelines     | complete | Families, scales, labels, weights, and tracking documented. |

### Elevation

| ID                        | Item              | Status   | Evidence or decision                               |
| ------------------------- | ----------------- | -------- | -------------------------------------------------- |
| `df-elevation-shadows`    | Shadows           | complete | Two named shadows; line and surface before shadow. |
| `df-elevation-background` | Background colors | complete | Canvas, raised, and overlay surface roles.         |
| `df-elevation-z`          | Z-index           | complete | Five bounded, named z-index levels.                |

### Motion

| ID                   | Item          | Status   | Evidence or decision                                   |
| -------------------- | ------------- | -------- | ------------------------------------------------------ |
| `df-motion-easing`   | Easing        | complete | Standard and emphasized easing tokens.                 |
| `df-motion-duration` | Duration      | complete | Fast, medium, and ambient duration tokens.             |
| `df-motion-a11y`     | Accessibility | complete | Global reduced-motion override and component fallback. |

### Iconography

| ID                          | Item               | Status   | Evidence or decision                                       |
| --------------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| `df-iconography-a11y`       | Accessibility      | complete | Decorative/informative icon labeling rules.                |
| `df-iconography-style`      | Style              | complete | Icon-light glyph policy and SVG stroke specification.      |
| `df-iconography-naming`     | Naming             | complete | Names describe meaning rather than drawing.                |
| `df-iconography-grid`       | Relation with grid | complete | Custom SVG 24 × 24 grid.                                   |
| `df-iconography-keywords`   | Keywords           | complete | Search keywords listed for every reserved symbol.          |
| `df-iconography-reserved`   | Reserved icons     | complete | Arrow, download, external, and location meanings reserved. |
| `df-iconography-guidelines` | Guidelines         | complete | Full policy in `foundations.md`.                           |

## Core components — 166

### Accordion

No collapsible content exists; native heading and section structure is clearer.

| ID                          | Item                         | Status |
| --------------------------- | ---------------------------- | ------ |
| `c-accordion-active`        | Active state                 | n/a    |
| `c-accordion-composition`   | Composition                  | n/a    |
| `c-accordion-transition`    | Toggle transition            | n/a    |
| `c-accordion-a11y-relation` | Content and trigger relation | n/a    |

### Alert

No system feedback or interruptive status workflow exists.

| ID                   | Item                  | Status |
| -------------------- | --------------------- | ------ |
| `c-alert-colors`     | Colors                | n/a    |
| `c-alert-title`      | Title support         | n/a    |
| `c-alert-icon`       | Icon support          | n/a    |
| `c-alert-actions`    | Supplementary actions | n/a    |
| `c-alert-responsive` | Responsiveness        | n/a    |
| `c-alert-a11y-roles` | Accessibility roles   | n/a    |

### Avatar

Portraits are editorial images rather than account identities.

| ID                        | Item                | Status |
| ------------------------- | ------------------- | ------ |
| `c-avatar-image`          | Image               | n/a    |
| `c-avatar-image-fallback` | Image fallback      | n/a    |
| `c-avatar-sizes`          | Sizes               | n/a    |
| `c-avatar-colors`         | Colors              | n/a    |
| `c-avatar-shape`          | Shape               | n/a    |
| `c-avatar-group`          | Avatar groups       | n/a    |
| `c-avatar-a11y-label`     | Accessibility label | n/a    |

### Badge

Implemented by `components/Badge.astro` for static article metadata.

| ID                     | Item               | Status   | Evidence or decision                 |
| ---------------------- | ------------------ | -------- | ------------------------------------ |
| `c-badge-colors`       | Colors             | complete | Accent and neutral semantic tones.   |
| `c-badge-variants`     | Variants           | complete | Tone variants are typed.             |
| `c-badge-sizes`        | Sizes              | complete | Small and medium sizes.              |
| `c-badge-icon-support` | Icon support       | complete | Optional decorative icon slot.       |
| `c-badge-dismiss`      | Dismissible action | n/a      | Badges are metadata, never controls. |
| `c-badge-empty`        | Empty state        | complete | Empty slot renders no root.          |
| `c-badge-positioning`  | Positioning        | n/a      | Badges stay in document flow.        |

### Button

Implemented by `components/Button.astro` and used by production pages.

| ID                    | Item               | Status   | Evidence or decision                                            |
| --------------------- | ------------------ | -------- | --------------------------------------------------------------- |
| `c-button-colors`     | Colors             | complete | Semantic primary, secondary, and quiet treatments.              |
| `c-button-variants`   | Variants           | complete | Three typed variants.                                           |
| `c-button-sizes`      | Sizes              | complete | Small and medium typed sizes.                                   |
| `c-button-icon`       | Icon support       | complete | Optional decorative icon slot.                                  |
| `c-button-hover`      | Hover state        | complete | Color and 2px lift.                                             |
| `c-button-active`     | Active state       | complete | Lift resolves on active.                                        |
| `c-button-loading`    | Loading state      | complete | Disabled activation, `aria-busy`, label, reduced-motion loader. |
| `c-button-disabled`   | Disabled state     | complete | Native disabled or non-navigable anchor state.                  |
| `c-button-a11y-role`  | Accessibility role | complete | Anchor for navigation; native button for actions.               |
| `c-button-a11y-focus` | Focus indicator    | complete | Tokenized 3px amber outline.                                    |

### Breadcrumbs

The site hierarchy is shallow and always exposed by primary or archive navigation.

| ID                        | Item             | Status |
| ------------------------- | ---------------- | ------ |
| `c-breadcrumbs-icon`      | Icon support     | n/a    |
| `c-breadcrumbs-disabled`  | Disabled state   | n/a    |
| `c-breadcrumbs-collapsed` | Collapsed state  | n/a    |
| `c-breadcrumbs-separator` | Custom separator | n/a    |

### Calendar

No date-selection workflow exists.

| ID                           | Item                 | Status |
| ---------------------------- | -------------------- | ------ |
| `c-calendar-modes`           | Display modes        | n/a    |
| `c-calendar-selected`        | Selected state       | n/a    |
| `c-calendar-month-selection` | Month selection      | n/a    |
| `c-calendar-day-names`       | Day names            | n/a    |
| `c-calendar-i18n`            | Internationalisation | n/a    |
| `c-calendar-a11y-keyboard`   | Keyboard navigation  | n/a    |
| `c-calendar-a11y-state`      | State announcement   | n/a    |

### Card

`src/components/PostCard.astro` is the approved editorial card; generic surface
cards are not part of the system.

| ID                      | Item                  | Status   | Evidence or decision                               |
| ----------------------- | --------------------- | -------- | -------------------------------------------------- |
| `c-card-composition`    | Content composition   | complete | Number, metadata, title, summary, and destination. |
| `c-card-media-sections` | Media sections        | n/a      | Post cards are intentionally text-only.            |
| `c-card-actions`        | Supplementary actions | complete | Whole-card destination and directional affordance. |
| `c-card-responsive`     | Responsiveness        | complete | Dedicated small-screen grid.                       |
| `c-card-groups`         | Card groups           | complete | Archive uses a semantic ordered list.              |

### Carousel

No horizontally paged media or item sequence exists.

| ID                                    | Item                | Status |
| ------------------------------------- | ------------------- | ------ |
| `c-carousel-navigation`               | Navigation controls | n/a    |
| `c-carousel-composition`              | Item composition    | n/a    |
| `c-carousel-item-size`                | Item sizes          | n/a    |
| `c-carousel-touch`                    | Touch navigation    | n/a    |
| `c-carousel-responsive`               | Responsiveness      | n/a    |
| `c-carousel-a11y-keyboard-navigation` | Keyboard navigation | n/a    |

### Checkbox

No form or multi-selection workflow exists.

| ID                         | Item                | Status |
| -------------------------- | ------------------- | ------ |
| `c-checkbox-label`         | Label               | n/a    |
| `c-checkbox-checked`       | Checked state       | n/a    |
| `c-checkbox-error`         | Error state         | n/a    |
| `c-checkbox-disabled`      | Disabled state      | n/a    |
| `c-checkbox-indeterminate` | Indeterminate state | n/a    |
| `c-checkbox-group`         | Checkbox group      | n/a    |
| `c-checkbox-a11y-keyboard` | Keyboard support    | n/a    |

### Divider

Implemented by `components/Divider.astro` and by native section borders.

| ID                    | Item               | Status   | Evidence or decision                                         |
| --------------------- | ------------------ | -------- | ------------------------------------------------------------ |
| `c-divider-direction` | Direction          | complete | Horizontal and vertical orientations.                        |
| `c-divider-a11y-role` | Accessibility role | complete | Decorative default; optional separator role and orientation. |

### Dropdown

No hidden action or navigation menu exists.

| ID                         | Item                | Status |
| -------------------------- | ------------------- | ------ |
| `c-dropdown-composition`   | Content composition | n/a    |
| `c-dropdown-hover`         | Hover trigger       | n/a    |
| `c-dropdown-positioning`   | Dynamic positioning | n/a    |
| `c-dropdown-responsive`    | Responsiveness      | n/a    |
| `c-dropdown-a11y-focus`    | Focus trapping      | n/a    |
| `c-dropdown-a11y-keyboard` | Keyboard navigation | n/a    |

### Icon

The approved core is an icon-light policy using type glyphs and direct SVG.

| ID                       | Item          | Status   | Evidence or decision                                   |
| ------------------------ | ------------- | -------- | ------------------------------------------------------ |
| `c-icon-colors`          | Colors        | complete | Icons inherit `currentColor`.                          |
| `c-icon-sizes`           | Sizes         | complete | Type glyphs use em; SVG uses a 24 × 24 view box.       |
| `c-icon-a11y-decoration` | Interactivity | complete | Decorative icons are hidden; informative SVG is named. |

### Image

Native images remain preferable to a wrapper component.

| ID                 | Item                   | Status   | Evidence or decision                                            |
| ------------------ | ---------------------- | -------- | --------------------------------------------------------------- |
| `c-image-sizes`    | Sizes                  | complete | Intrinsic dimensions and aspect ratio are required.             |
| `c-image-fallback` | Image fallback         | deferred | Add when a public content image can fail independently.         |
| `c-image-density`  | Screen density support | deferred | Adopt Astro image variants with the next public authored image. |
| `c-image-a11y-alt` | Alt text               | complete | Informative/decorative alt rules documented and used.           |

### Link

Links use native anchors and context-specific composition.

| ID                        | Item               | Status   | Evidence or decision                                          |
| ------------------------- | ------------------ | -------- | ------------------------------------------------------------- |
| `c-link-icon`             | Icon support       | complete | Reserved directional glyphs accompany descriptive text.       |
| `c-link-colors`           | Colors             | complete | Body, navigation, and action link colors use semantic tokens. |
| `c-link-disabled`         | Disabled state     | n/a      | A link without navigation is not presented as a link.         |
| `c-link-font-inheritance` | Font inheritance   | complete | Anchors inherit surrounding type by default.                  |
| `c-link-multiline`        | Multiline display  | complete | Article and route links support wrapped content.              |
| `c-link-a11y-role`        | Accessibility role | complete | Native anchor with valid destination.                         |

### List

Lists use native ordered, unordered, and description-list elements.

| ID                   | Item               | Status   | Evidence or decision                                |
| -------------------- | ------------------ | -------- | --------------------------------------------------- |
| `c-list-order`       | Order              | complete | Ordered vs. unordered meaning is preserved.         |
| `c-list-composition` | Content cmposition | complete | Lists compose text, links, cards, and descriptions. |
| `c-list-a11y-role`   | Accessibility role | complete | Native list roles; no redundant ARIA.               |

### Loading indicator

There is no standalone asynchronous-content loader. Button owns its local loading
state; broader loading UI should be designed with the feature that needs it.

| ID                                        | Item                | Status |
| ----------------------------------------- | ------------------- | ------ |
| `c-loading-indicator-colors`              | Colors              | n/a    |
| `c-loading-indicators-sizes`              | Sizes               | n/a    |
| `c-loading-indicator-time`                | Loading duration    | n/a    |
| `c-loading-indicator-a11y-reduced-motion` | Reduced motion      | n/a    |
| `c-loading-indicator-a11y-label`          | Accessibility label | n/a    |

### Modal

No interruptive overlay workflow exists.

| ID                      | Item                        | Status |
| ----------------------- | --------------------------- | ------ |
| `c-modal-composition`   | Content composition         | n/a    |
| `c-modal-actions`       | Supplementary actions       | n/a    |
| `c-modal-close`         | Close action                | n/a    |
| `c-modal-positioning`   | Positioning                 | n/a    |
| `c-modal-sizes`         | Sizes                       | n/a    |
| `c-modal-a11y-focus`    | Focus trapping              | n/a    |
| `c-modal-a11y-keyboard` | Keyboard navigation         | n/a    |
| `c-modal-a11y-labels`   | Title and subtitle labeling | n/a    |

### Pagination

Deferred until the writing archive becomes unwieldy as a single index.

| ID                           | Item                          | Status   |
| ---------------------------- | ----------------------------- | -------- |
| `c-pagination-selected`      | Selected page state           | deferred |
| `c-pagination-ranges`        | Page display ranges           | deferred |
| `c-pagination-amount`        | Amount of items per page      | deferred |
| `c-pagination-indeterminate` | Indeterminate amount of pages | deferred |
| `c-pagination-a11y-label`    | Full page label announcements | deferred |
| `c-pagination-a11y-state`    | State announcement            | deferred |

### Progress bar

No measured task or process workflow exists.

| ID                      | Item                | Status |
| ----------------------- | ------------------- | ------ |
| `c-progress-label`      | Label               | n/a    |
| `c-progress-sizes`      | Sizes               | n/a    |
| `c-progress-duration`   | Duration            | n/a    |
| `c-progress-a11y-label` | Accessibility label | n/a    |

### Input radio

No mutually exclusive form-choice workflow exists.

| ID                      | Item             | Status |
| ----------------------- | ---------------- | ------ |
| `c-radio-label`         | Label            | n/a    |
| `c-radio-checked`       | Checked state    | n/a    |
| `c-radio-error`         | Error state      | n/a    |
| `c-radio-group`         | Radio group      | n/a    |
| `c-radio-a11y-keyboard` | Keyboard support | n/a    |

### Select

No form-selection workflow exists.

| ID                     | Item                | Status |
| ---------------------- | ------------------- | ------ |
| `c-select-label`       | Label               | n/a    |
| `c-select-error`       | Error state         | n/a    |
| `c-select-disabled`    | Disabled state      | n/a    |
| `c-select-placeholder` | Placeholder         | n/a    |
| `c-select-helper`      | Helper text         | n/a    |
| `c-select-icon`        | Icon support        | n/a    |
| `c-select-prefix`      | Prefix              | n/a    |
| `c-select-a11y-label`  | Accessibility label | n/a    |

### Skeleton

Static generation means content is present at first render.

| ID                       | Item           | Status |
| ------------------------ | -------------- | ------ |
| `c-skeleton-sizes`       | Sizes          | n/a    |
| `c-skeleton-shapes`      | Shapes         | n/a    |
| `c-skeleton-composition` | Composition    | n/a    |
| `c-skeleton-a11y-motion` | Reduced motion | n/a    |

### Switch

No immediate binary setting exists.

| ID                       | Item                | Status |
| ------------------------ | ------------------- | ------ |
| `c-switch-label`         | Label               | n/a    |
| `c-switch-checked`       | Checked state       | n/a    |
| `c-switch-disabled`      | Disabled state      | n/a    |
| `c-switch-a11y-keyboard` | Keyboard navigation | n/a    |
| `c-switch-a11y-label`    | Accessibility label | n/a    |

### Tabs

Content is exposed in the document flow and primary navigation.

| ID                     | Item                | Status |
| ---------------------- | ------------------- | ------ |
| `c-tabs-composition`   | Content composition | n/a    |
| `c-tabs-variants`      | Variants            | n/a    |
| `c-tabs-selected`      | Selected state      | n/a    |
| `c-tabs-disabled`      | Disabled state      | n/a    |
| `c-tabs-icon`          | Icon support        | n/a    |
| `c-tabs-equal`         | Equal width layout  | n/a    |
| `c-tabs-a11y-keyboard` | Keyboard support    | n/a    |

### Text area

The contact flow uses email; there is no site form.

| ID                        | Item                | Status |
| ------------------------- | ------------------- | ------ |
| `c-text-area-label`       | Label               | n/a    |
| `c-text-area-error`       | Error state         | n/a    |
| `c-text-area-disabled`    | Disabled state      | n/a    |
| `c-text-area-placeholder` | Placeholder         | n/a    |
| `c-text-area-helper`      | Helper text         | n/a    |
| `c-text-area-sizes`       | Sizes               | n/a    |
| `c-text-area-a11y-label`  | Accessibility label | n/a    |

### Text field

The contact flow uses email; there is no site form.

| ID                         | Item                | Status |
| -------------------------- | ------------------- | ------ |
| `c-text-field-label`       | Label               | n/a    |
| `c-text-field-error`       | Error state         | n/a    |
| `c-text-field-disabled`    | Disabled state      | n/a    |
| `c-text-field-placeholder` | Placeholder         | n/a    |
| `c-text-field-helper`      | Helper text         | n/a    |
| `c-text-field-icon`        | Icon support        | n/a    |
| `c-text-field-affix`       | Prefix / Suffix     | n/a    |
| `c-text-field-sizes`       | Sizes               | n/a    |
| `c-text-field-a11y-label`  | Accessibility label | n/a    |

### Toast

No transient system-feedback workflow exists.

| ID                    | Item                 | Status |
| --------------------- | -------------------- | ------ |
| `c-toast-composition` | Content composition  | n/a    |
| `c-toast-colors`      | Colors               | n/a    |
| `c-toast-icon`        | Icon support         | n/a    |
| `c-toast-timeout`     | Timeout              | n/a    |
| `c-toast-stacking`    | Stacking             | n/a    |
| `c-toast-action`      | Supplementary action | n/a    |
| `c-toast-a11y-focus`  | Focus management     | n/a    |
| `c-toast-a11y-motion` | Reduced motion       | n/a    |

### Tooltip

The system avoids unexplained icon-only controls, so hidden explanatory content
is unnecessary.

| ID                        | Item             | Status |
| ------------------------- | ---------------- | ------ |
| `c-tooltip-positioning`   | Positioning      | n/a    |
| `c-tooltip-timeout`       | Timeout          | n/a    |
| `c-tooltip-a11y-keyboard` | Keyboard support | n/a    |

## Maintenance — 28

### Documentation

| ID                            | Item                           | Status   | Evidence or decision                      |
| ----------------------------- | ------------------------------ | -------- | ----------------------------------------- |
| `m-documentation-principles`  | Design system principles       | complete | `README.md`.                              |
| `m-documentation-start`       | Getting started                | complete | Ordered entry path in `README.md`.        |
| `m-documentation-design`      | Design best practices          | complete | `foundations.md` and `content.md`.        |
| `m-documentation-dev`         | Development best practices     | complete | House rules and change workflow.          |
| `m-documentation-anatomy`     | Component anatomy              | complete | `components.md`.                          |
| `m-documentation-props`       | Component properties           | complete | Typed APIs and property tables.           |
| `m-documentation-composition` | Component composition examples | complete | Documented recipes and production usages. |
| `m-documentation-sandbox`     | Sandbox product example        | complete | Private `/design-system/` visual catalog. |
| `m-documentation-env`         | Browser / OS support           | complete | Browser policy and viewport matrix.       |
| `m-documentation-release`     | Release cycle                  | complete | Semantic release policy and changelog.    |

### Local libraries

There is one site, one owner, and no independently released local library.

| ID                     | Item                              | Status |
| ---------------------- | --------------------------------- | ------ |
| `m-local-when`         | When to build                     | n/a    |
| `m-local-types`        | Horizontal and vertical libraries | n/a    |
| `m-local-expectations` | Library expectations              | n/a    |
| `m-local-release`      | Release cycle alignment           | n/a    |

### Team processes

| ID                      | Item                     | Status   | Evidence or decision                                    |
| ----------------------- | ------------------------ | -------- | ------------------------------------------------------- |
| `m-process-log`         | Decision-making log      | complete | `decisions/` and ADR template.                          |
| `m-process-roadmap`     | Roadmap                  | complete | Trigger-based roadmap in `maintenance.md`.              |
| `m-process-stakeholder` | Stakeholder mapping      | complete | Single owner and site consumer recorded in README/ADR.  |
| `m-process-analytics`   | Analytics                | complete | Deliberate no-collection policy and future constraints. |
| `m-process-shifts`      | Ongoing support "shifts" | n/a      | No support team.                                        |
| `m-process-sla`         | SLA                      | n/a      | Personal site has no service contract.                  |

### Community support

The design system has no external consumer community.

| ID                     | Item             | Status |
| ---------------------- | ---------------- | ------ |
| `m-community-channels` | Support channels | n/a    |
| `m-community-template` | Templates        | n/a    |
| `m-community-updates`  | Regular updates  | n/a    |
| `m-community-slots`    | Open hours       | n/a    |

### Contribution

| ID                          | Item                       | Status   | Evidence or decision              |
| --------------------------- | -------------------------- | -------- | --------------------------------- |
| `m-contribution-rules`      | House rules for the system | complete | Rules in `maintenance.md`.        |
| `m-contribution-guidelines` | Contribution guidelines    | complete | Seven-step change workflow.       |
| `m-contribution-template`   | Feature proposal template  | complete | `templates/feature-proposal.md`.  |
| `m-contribution-engagement` | Engagement                 | n/a      | No contributor community program. |
