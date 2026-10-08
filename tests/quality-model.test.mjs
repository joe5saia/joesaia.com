import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const bytes = await readFile(
  new URL("../public/wasm/quality-model.wasm", import.meta.url),
);
const { instance } = await WebAssembly.instantiate(bytes);
const calculate = instance.exports.defect_rate;

test("shipped Rust WASM reproduces article defaults", () => {
  assert.ok(
    Math.abs(calculate(80, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 25, 0) - 6.328125) <
      1e-10,
  );
  assert.ok(
    Math.abs(
      calculate(50, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 25, 0) -
        3.7542343139648438,
    ) < 1e-10,
  );
});

test("disabled, perfect, and invalid layers stay bounded", () => {
  assert.equal(calculate(...Array(13).fill(0)), 100);
  assert.equal(calculate(...Array(13).fill(100)), 0);
  assert.equal(calculate(...Array(13).fill(-1)), 100);
  assert.equal(calculate(...Array(13).fill(NaN)), 100);
});

test("additional safeguards never increase the defect rate", () => {
  const effects = Array(13).fill(0);
  let previous = 100;
  for (let i = 0; i < effects.length; i++) {
    effects[i] = 25;
    const rate = calculate(...effects);
    assert.ok(rate < previous);
    previous = rate;
  }
});
