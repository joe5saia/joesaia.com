# Maintenance

## Ownership and support

Joe Saia owns design and engineering decisions for the system. Use repository
issues for proposals and pull-request discussion for implementation feedback.
There is no staffed support rotation or service-level agreement for this personal
site.

## Browser and platform support

Support the current and previous major versions of Chrome, Safari, Firefox, and
Edge, including mobile Safari and Chrome for Android. Pages must remain readable
when optional enhancement APIs such as `backdrop-filter` are unavailable.

Test representative changes at:

- 320px: minimum reflow and long-word stress.
- 768px: tablet/intermediate layout.
- 1440px: wide editorial composition.
- Keyboard only: focus order, visibility, and activation.
- Reduced motion: no essential information depends on animation.

## Change workflow

1. Start from a real content or interface need.
2. Check whether a token, native element, or current component already solves it.
3. For a new public component or foundation change, copy
   `templates/feature-proposal.md` and record the decision before implementation.
4. Implement the smallest semantic API. Include default, responsive, focus,
   disabled, reduced-motion, and content-stress states when they apply.
5. Add the representative states to `Showcase.astro`.
6. Run `npm test`, `npm run lint`, `npm run format:check`, and `npm run build`.
7. Update `CHANGELOG.md` and the checklist evidence when coverage changes.

## House rules

- New components use Astro and typed props.
- New visual values must be existing tokens or deliberate additions to
  `tokens.css`; do not hide one-off constants in a component.
- Prefer native elements and CSS over JavaScript behavior.
- Components do not own page-specific copy or data fetching.
- Public names describe roles, not visual accidents (`primary`, not `orange`).
- A component must document anatomy, properties, composition, and accessibility.
- Breaking prop or token changes require a migration note.
- Do not add a dependency for a primitive the platform already provides.

## Release policy

The design system ships with the site. Use semantic version intent:

- **Patch:** documentation, accessibility repair without API change, or visual
  correction within the current contract.
- **Minor:** additive token, variant, or component.
- **Major:** removed or renamed token/prop, changed default, or visual language
  change that requires consumer updates.

Record releases in `CHANGELOG.md`. Align any component change with the site build
that consumes it; there is no independently published local package.

## Decision log

Decision records live in `decisions/`. Add one when a choice changes the system's
scope, public API, brand language, accessibility baseline, or dependency policy.
Small implementation details belong in the pull request, not an ADR.

## Roadmap

### Now

- Keep tokens, primitives, and visual catalog aligned with production usage.
- Preserve WCAG 2.2 AA behavior through automated and manual checks.

### When demanded by a real feature

- Add semantic feedback colors with contrast evidence if validation or status UI
  is introduced.
- Add responsive image density variants when authored photography appears on a
  public page.
- Add archive pagination when article volume makes a single index unwieldy.
- Add form primitives only if the contact flow moves beyond email links.

### Not planned

- A general-purpose application component library.
- A light theme without a product requirement.
- Publishing a standalone npm package.
- Community support programs, office hours, or a staffed SLA.

## Analytics

No component analytics are collected. If product analytics are introduced, use
privacy-preserving aggregate events tied to user outcomes—not hover, focus, or
other low-signal interaction exhaust. Document the event contract and retention
policy before collection.
