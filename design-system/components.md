# Components

Components are Astro primitives under `design-system/components/` or established
site compositions under `src/components/`. Add a component only when a real page
needs the pattern or when it removes meaningful duplication.

## Inventory

| Component      | Location                                 | Status           | Purpose                                                          |
| -------------- | ---------------------------------------- | ---------------- | ---------------------------------------------------------------- |
| Button         | `design-system/components/Button.astro`  | Stable           | Navigation and actions in primary, secondary, and quiet variants |
| Badge          | `design-system/components/Badge.astro`   | Stable           | Compact article metadata and tags                                |
| Eyebrow        | `design-system/components/Eyebrow.astro` | Stable           | Section index and category label                                 |
| Divider        | `design-system/components/Divider.astro` | Stable           | Horizontal or vertical structural separation                     |
| Header         | `src/components/Header.astro`            | Site composition | Primary navigation and wordmark                                  |
| Footer         | `src/components/Footer.astro`            | Site composition | Secondary navigation and ownership                               |
| Post card      | `src/components/PostCard.astro`          | Site composition | Responsive article summary row                                   |
| Survival chart | `src/components/SurvivalTo80Chart.astro` | Content-specific | Accessible data visualization with text/table equivalent         |

## Button

**Anatomy:** root → optional start icon → label → optional end icon → loading
indicator. The component emits an anchor when `href` is present and a native
button otherwise.

| Property        | Type                            | Default     | Notes                                               |
| --------------- | ------------------------------- | ----------- | --------------------------------------------------- |
| `href`          | `string`                        | —           | Emits an anchor; omit for an action button          |
| `variant`       | `primary \| secondary \| quiet` | `secondary` | Visual hierarchy, not semantic importance           |
| `size`          | `small \| medium`               | `medium`    | Both preserve an accessible target                  |
| `type`          | `button \| submit \| reset`     | `button`    | Native button only                                  |
| `disabled`      | `boolean`                       | `false`     | Removes anchor navigation or sets native `disabled` |
| `loading`       | `boolean`                       | `false`     | Disables activation and sets `aria-busy`            |
| `download`      | `boolean \| string`             | —           | Anchor only                                         |
| `target`, `rel` | `string`                        | —           | Anchor only; pair `_blank` with `noopener`          |
| `ariaLabel`     | `string`                        | —           | Use only when the visible label is insufficient     |

```astro
<Button href="/writing/" variant="primary">
  Browse writing
  <span slot="icon" aria-hidden="true">→</span>
</Button>

<Button type="submit" loading={isSaving}>Save changes</Button>
```

Use primary once per decision group. Use secondary for adjacent alternatives and
quiet inside low-emphasis compositions. Do not use an anchor button for an
in-page action or a button for navigation.

## Badge

**Anatomy:** inline root → optional icon → label. Badges are static metadata, not
controls. They do not dismiss, float over another component, or accept click
handlers.

| Property | Type                | Default  |
| -------- | ------------------- | -------- |
| `tone`   | `accent \| neutral` | `accent` |
| `size`   | `small \| medium`   | `small`  |

An empty default slot renders nothing. If content becomes interactive, use a
button or link rather than expanding Badge's contract.

## Eyebrow

**Anatomy:** optional index → text label. Use the `index` prop for an ordered page
section. Source copy remains sentence case; visual uppercase is CSS only.

```astro
<Eyebrow index="03">Field notes</Eyebrow>
```

## Divider

Decorative by default. Set `decorative={false}` only when the separator conveys
structure that is not already represented by native sectioning elements. Use
`orientation="vertical"` only inside a layout with an explicit block size.

## Composition examples

- Page introduction: Eyebrow + display `h1` + secondary lead copy.
- Decision group: one primary Button + zero or more secondary Buttons.
- Writing archive: ordered list + PostCard rows; the list supplies group
  semantics and cards keep the entire linked title/summary target together.
- Article metadata: Badge list inside a semantic list when there are multiple
  tags.

The private `/design-system/` route is the supported visual sandbox for tokens,
component variants, states, and responsive behavior.

## When not to build a component

Use native HTML for lists, images, links, headings, and sectioning. The portfolio
does not currently need application controls such as calendars, modals, tabs,
toasts, or form fields. Their checklist entries are `n/a`, not unfinished
promises. Promote a pattern only after a real feature establishes its content,
state, and accessibility requirements.
