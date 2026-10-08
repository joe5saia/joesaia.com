# Quality layers calculator

Rust computes the defect rate; `src/scripts/quality-layers.js` handles controls and renders two DOM bars. No framework, wasm-bindgen, or chart library. `QualityLayers.astro` supplies accessible controls and static defaults. The post opts in with `visualization: quality-layers` and the layout embeds it after the article.

## Build

Install Rust with Cargo and the WebAssembly standard library, then:

```sh
rustup target add wasm32-unknown-unknown
npm run test:rust
npm run build:wasm
npm test
npm run build
```

Commit both Rust source and `public/wasm/quality-model.wasm` after changes. The checked-in binary lets Cloudflare and ordinary site builds work without a Rust toolchain. Vite imports the binary as a URL (and may inline this tiny module), so source changes require rebuilding the binary. Cargo has no third-party dependencies.

## ABI and assumptions

`defect_rate` takes 13 scalar f64 effectiveness percentages, in this order:

Coding, review, manual testing, unit tests, integration tests, end-to-end tests, property testing, fuzzing, formal QA, dogfooding, demos, observability, specification design.

Disabled layers pass zero. Rust clamps finite percentages to 0–100 and treats nonfinite inputs as zero. The return value is a percentage: `100 × product(1 − effectiveness / 100)`. Each layer acts on remaining defects. Real safeguards may have correlated blind spots; this is a toy model, not a guarantee.

- Typical: coding at 80%, review/manual/unit/observability at 25% → 6.328125%.
- Layered: coding at 50%, nine safeguards at 25% → 3.7542343139648438%.
- The article does not specify which nine; the UI explains its chosen set.
- Both bars use the same adaptive scale, explicitly labelled, with a minimum ceiling of 10%.

## Browser QA checklist

On the post, check desktop and 390px/320px mobile widths:

- Defaults read 6.33% and 3.75%; the comparison reads 40.7% fewer.
- Turn coding off: typical becomes 31.64%, and its slider disables.
- Space toggles focused switches; arrow keys adjust focused sliders.
- Coding at 100% yields zero; at 0% yields 31.64%.
- All switches off yields 100% on both sides and a 0–100% scale.
- Reset restores switch states, slider values, bars, scale, and comparison.
- Changes to one model do not affect the other model's controls.
- Lower controls remain usable with the chart pinned above them.
- No horizontal overflow; long labels fit; focus indicators remain visible.
- With JS disabled, static defaults remain and controls are disabled.
- With WASM initialization blocked, an error message replaces loading text and controls stay disabled.

Rust unit tests cover the formula and boundaries; Node tests instantiate the actual shipped binary to check the ABI and defaults.
