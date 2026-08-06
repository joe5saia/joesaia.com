import React from "react";

/**
 * Badge / keyword pill — pill-shaped, gold-bordered cream chip used for
 * service areas and specialties (e.g. "West Orange", "Essex County").
 */
export function Badge({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid var(--gold-border-24)",
        borderRadius: "var(--radius-pill)",
        background: "rgba(250, 248, 242, 0.78)",
        padding: "0.45rem 0.75rem",
        color: "var(--color-ink)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9rem",
        fontWeight: 600,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
