#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
cargo build --manifest-path wasm/quality-model/Cargo.toml --target wasm32-unknown-unknown --release
mkdir -p public/wasm
cp wasm/quality-model/target/wasm32-unknown-unknown/release/quality_model.wasm public/wasm/quality-model.wasm
