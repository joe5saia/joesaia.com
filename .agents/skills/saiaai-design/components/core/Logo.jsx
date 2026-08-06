import React from "react";
import { BrandMark } from "./BrandMark.jsx";

/**
 * Logo — the SaiaAI North Star mark locked up with the wordmark.
 * The canonical brand signature; prefer this over composing mark + wordmark by hand.
 */
export function Logo({ orientation = "horizontal", size = "md", onDark = false, style, ...rest }) {
  const scale = { sm: 28, md: 40, lg: 60 }[size] || 40;
  const wordSize = { sm: "1.25rem", md: "1.75rem", lg: "2.6rem" }[size] || "1.75rem";
  const stacked = orientation === "stacked";

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: stacked ? "column" : "row",
        alignItems: "center",
        gap: stacked ? scale * 0.32 : scale * 0.42,
        ...style,
      }}
      {...rest}
    >
      <BrandMark size={scale} />
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: wordSize,
          letterSpacing: "0.14em",
          lineHeight: 1,
          color: onDark ? "var(--color-cream-2)" : "var(--color-ink)",
        }}
      >
        Saia<span style={{ color: "var(--color-gold)" }}>AI</span>
      </span>
    </span>
  );
}
