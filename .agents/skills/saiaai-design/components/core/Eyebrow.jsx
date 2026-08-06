import React from "react";

/**
 * Eyebrow — small gold, uppercase, wide-tracked kicker above headings.
 */
export function Eyebrow({ children, light = false, style, ...rest }) {
  return (
    <p
      style={{
        margin: "0 0 0.75rem",
        color: "var(--color-gold)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--eyebrow-size)",
        fontWeight: 600,
        letterSpacing: "var(--eyebrow-tracking)",
        textTransform: "uppercase",
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}
