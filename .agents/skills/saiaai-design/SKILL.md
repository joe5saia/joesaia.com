---
name: saiaai-design
description: Use this skill to generate well-branded interfaces and assets for SaiaAI, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts:
- Brand: SaiaAI — boutique software consultancy, West Orange NJ (Joe Saia). Premium but approachable.
- Palette: cream `#F4F2EC` canvas, ink navy `#16263D`, one gold accent `#C2A45F`. Muted slate text `#5E6B7C`.
- Type: Cormorant Garamond (serif display, weight 500, tight tracking) + Hanken Grotesk (sans body). Eyebrows uppercase gold, 0.28em tracking.
- Signature: square (0-radius) uppercase buttons against 18px-radius cream cards with one soft long shadow. Gold used sparingly. No emoji. Restrained 160ms hover transitions.
- Voice: third-person "SaiaAI" / "Joe", address reader as "you". Sentence case. Practical, anti-hype.
- Logo: the North Star mark (gold four-point guiding star + twinkle) + serif wordmark. Use the `Logo` component (mark+wordmark), `BrandMark` (symbol/favicon, `solo` below ~24px), or `Wordmark` (text only).
- Components live under `components/` (namespace `window.SaiaAIDesignSystem_ac1fa8`); full homepage recreation in `ui_kits/website/`.
