import React from "react";
import { TextLink } from "../core/TextLink.jsx";

/**
 * ServiceCard — a Card variant for the services grid: heading, description, and a TextLink.
 */
export function ServiceCard({ title, href = "#", linkLabel = "Learn more", children, style, ...rest }) {
  return (
    <div
      style={{
        border: "1px solid var(--color-line)",
        borderRadius: "var(--radius-lg)",
        background: "rgba(250, 248, 242, 0.92)",
        boxShadow: "var(--shadow-soft)",
        padding: "clamp(1.25rem, 3vw, 2rem)",
        display: "grid",
        gap: "0.75rem",
        alignContent: "start",
        ...style,
      }}
      {...rest}
    >
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          fontSize: "var(--text-h3)",
          letterSpacing: "-0.01em",
          color: "var(--color-ink)",
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: "var(--color-muted)" }}>{children}</p>
      <TextLink href={href}>{linkLabel}</TextLink>
    </div>
  );
}
