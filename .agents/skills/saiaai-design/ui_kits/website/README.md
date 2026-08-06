# SaiaAI Website UI Kit

A faithful recreation of the SaiaAI marketing homepage (Hugo site, `joe5saia/saiaai_website`).

## Screens
- `index.html` — full homepage: sticky header w/ services dropdown, hero + summary card, services grid, process steps, CTA band, footer.

## Composition
Built from design-system primitives (`Button`, `Eyebrow`, `Badge`, `Card`, `ServiceCard`) loaded from `_ds_bundle.js`. Layout/section JSX lives here:
- `Header.jsx` — sticky nav, scroll shadow, services dropdown
- `Hero.jsx` — hero copy + stat card
- `Services.jsx` — `Services` + `Process` sections
- `Footer.jsx` — `CTA` band + `Footer`

All copy is lifted verbatim from the repo's `content/` markdown. This is a recreation, not a new design.
