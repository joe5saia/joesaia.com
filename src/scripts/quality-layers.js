// Rust owns the model; this custom element only reads controls and paints the DOM.
import wasmUrl from "../../public/wasm/quality-model.wasm?url";

let engine;
function loadEngine() {
  engine ??= fetch(wasmUrl)
    .then(async (response) => {
      if (!response.ok)
        throw new Error(`WASM request failed: ${response.status}`);
      // ArrayBuffer also works on hosts without application/wasm MIME configuration.
      const { instance } = await WebAssembly.instantiate(
        await response.arrayBuffer(),
      );
      return instance.exports;
    })
    .catch((error) => {
      engine = undefined;
      throw error;
    });
  return engine;
}

class QualityLayers extends HTMLElement {
  async connectedCallback() {
    if (this.dataset.initialized) return;
    this.dataset.initialized = "true";
    const status = this.querySelector("[data-status]");
    try {
      const { defect_rate: defectRate } = await loadEngine();
      const models = [...this.querySelectorAll("[data-model]")];
      const results = this.querySelectorAll("[data-result]");
      const bars = this.querySelectorAll("[data-bar]");
      const form = this.querySelector("form");
      const update = () => {
        const rates = models.map((model) => {
          const effects = [...model.querySelectorAll("[data-lever]")].map(
            (lever) => {
              const toggle = lever.querySelector('input[type="checkbox"]');
              const slider = lever.querySelector('input[type="range"]');
              slider.disabled = !toggle.checked;
              lever.querySelector("output").textContent = `${slider.value}%`;
              slider.setAttribute(
                "aria-valuetext",
                `${slider.value}% of remaining defects caught`,
              );
              return toggle.checked ? Number(slider.value) : 0;
            },
          );
          return defectRate(...effects);
        });
        const ceiling = Math.max(10, Math.ceil(Math.max(...rates) / 10) * 10);
        rates.forEach((rate, index) => {
          results[index].textContent = `${rate.toFixed(2)}%`;
          bars[index].style.height = `${(rate / ceiling) * 100}%`;
        });
        this.querySelector("[data-scale]").textContent =
          `Shared scale: 0–${ceiling}% · adjusts with your inputs`;
        let comparison = "Both processes have the same defect rate.";
        if (Math.abs(rates[0] - rates[1]) > 1e-10) {
          const winner = rates[0] < rates[1] ? "Typical" : "Layered";
          const reduction = (1 - Math.min(...rates) / Math.max(...rates)) * 100;
          comparison = `${winner} has ${reduction.toFixed(1)}% fewer escaping defects.`;
        }
        this.querySelector("[data-comparison]").textContent =
          `Typical: ${rates[0].toFixed(2)}%. Layered: ${rates[1].toFixed(2)}%. ${comparison}`;
      };
      models.forEach((model) => {
        model.disabled = false;
      });
      this.querySelector('button[type="reset"]').disabled = false;
      form.addEventListener("input", update);
      // Native reset restores values after the reset event dispatch completes.
      form.addEventListener("reset", () => setTimeout(update, 0));
      update();
      status.textContent =
        "Effectiveness = % of remaining defects caught. Switch a layer off to exclude it.";
    } catch (error) {
      status.textContent =
        "The calculator could not load. Showing article defaults; reload to try again.";
      console.error("Quality calculator:", error);
    }
  }
}

customElements.define("quality-layers", QualityLayers);
