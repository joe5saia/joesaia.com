import React from "react";

/**
 * Wordmark — the SaiaAI logotype (text only). Serif "Saia" + gold "AI", wide-tracked.
 * For the full brand signature use Logo (mark + wordmark); for the symbol use BrandMark.
 */
export function Wordmark({ size = "md", onDark = false, style, ...rest }) {
  const scale = { sm: "1.05rem", md: "1.45rem", lg: "2.2rem" }[size] || size;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "var(--font-serif)",
        fontWeight: 600,
        fontSize: scale,
        letterSpacing: "0.16em",
        lineHeight: 1,
        color: onDark ? "var(--color-cream-2)" : "var(--color-ink)",
        ...style,
      }}
      {...rest}
    >
      Saia<span style={{ color: "var(--color-gold)" }}>AI</span>
    </span>
  );
}
