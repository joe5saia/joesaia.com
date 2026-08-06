import React from "react";

/**
 * Card — the canonical SaiaAI surface: hairline border, large radius,
 * warm cream fill, soft long shadow. Used for hero cards, service summaries, steps.
 */
export function Card({ children, topline = false, style, ...rest }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--color-line)",
        borderRadius: "var(--radius-lg)",
        background: "rgba(250, 248, 242, 0.92)",
        boxShadow: "var(--shadow-soft)",
        padding: "clamp(1.4rem, 4vw, 2rem)",
        ...style,
      }}
      {...rest}
    >
      {topline && (
        <div
          style={{
            height: 8,
            width: "100%",
            marginBottom: "1.4rem",
            borderRadius: "var(--radius-pill)",
            background:
              "linear-gradient(90deg, var(--color-ink), var(--color-gold), var(--color-ink))",
          }}
        />
      )}
      {children}
    </div>
  );
}
