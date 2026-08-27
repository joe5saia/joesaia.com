# Content and design language

## Vision

Present Joe Saia as a technically rigorous, wide-ranging engineering and data
leader who can move between systems, organizations, and ideas. The experience
should feel considered and specific rather than promotional.

## Voice

| Attribute | Use                                                        | Avoid                                          |
| --------- | ---------------------------------------------------------- | ---------------------------------------------- |
| Direct    | State the point early and use concrete nouns and verbs.    | Long throat-clearing introductions.            |
| Grounded  | Name the environment, constraint, or measured result.      | Hype, superlatives, and trend language.        |
| Curious   | Acknowledge uncertainty and show the model behind a claim. | False certainty or performative contrarianism. |
| Personal  | First person is appropriate for experience and opinion.    | Corporate “we” for an individual portfolio.    |
| Calm      | Sentence case, measured punctuation, no emoji.             | Exclamation-heavy marketing copy.              |

## Terminology

Use the same term for the same concept.

- **Engineering and data leader** is the primary role description.
- **Writing** is the article collection. Do not alternate with “blog” in
  navigation or interface labels.
- **Résumé** is the page label; use **resume** only in URLs and file names.
- **AI-augmented development** describes tools assisting people. Use
  **autonomous** only when the system actually acts without step-by-step input.
- **Team** means people with an operating relationship, not an audience or
  collection of tools.
- Prefer **build**, **lead**, **measure**, **learn**, and **ship** over vague verbs
  such as **leverage**, **transform**, or **revolutionize**.

## Interface writing

- Put the action first: “Download PDF,” “Browse writing,” “Write to Joe.”
- Keep navigation labels to one or two words.
- Headings use sentence case. Short editorial display headings may end with a
  period when the punctuation adds cadence.
- Eyebrows are uppercase through CSS; write their source text in sentence case.
- Link text must describe the destination without relying on an adjacent icon.
- Dates use an unambiguous abbreviated month: “Aug 27, 2026.”
- Numerals are appropriate for metrics, timeline indices, and geographic
  coordinates.

## Microcopy

- **Empty state:** say what is absent, then the next useful action. Example:
  “No posts yet. Check back soon.”
- **Error:** identify what happened in plain language and offer a recovery path.
  The 404 page is the reference treatment.
- **Download:** include the format in the visible label; do not rely on an icon.
- **External navigation:** a visible destination label is sufficient. The arrow
  is decorative and should be hidden from assistive technology.
- **Loading:** preserve the action label, set `aria-busy="true"`, and expose the
  state with assistive text rather than replacing the button with an unlabeled
  spinner.
- **Disabled:** prefer explaining why an action is unavailable near the control.
  Do not use disabled links in editorial content.

## Internationalisation

The site is currently English (`en-US`) only. Components must not embed words in
CSS or icons, and dates should be formatted through `Intl`/`toLocaleDateString`
with an explicit locale and time zone. Bidirectional layout and translated copy
are not current product requirements; they must be assessed before adding a
second locale.

## Brand assets

- Wordmark: the text “Joe Saia” in the display stack.
- Monogram: `public/favicon.svg`; do not recolor or distort it per use.
- Social card: `public/social-card.png`, 1200 × 630.
- Photography and article art live with their content under `src/assets/` or
  `src/content/`.

Use the private `/brand-assets/` route to review production assets at target
sizes. New assets need descriptive file names, intrinsic dimensions, useful alt
text, and documented ownership or licensing.
