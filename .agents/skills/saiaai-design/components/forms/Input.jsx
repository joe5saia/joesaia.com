import React from "react";

/**
 * Input — labelled text field matching SaiaAI's hairline-bordered cream surfaces.
 */
export function Input({ label, id, hint, style, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "grid", gap: "0.4rem" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "var(--color-ink)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          minHeight: 48,
          border: "1px solid var(--color-line)",
          borderRadius: "var(--radius-sm)",
          background: "var(--color-white)",
          padding: "0.7rem 0.9rem",
          fontFamily: "var(--font-sans)",
          fontSize: "1rem",
          color: "var(--color-ink)",
          outline: "none",
          ...style,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-line)")}
        {...rest}
      />
      {hint && (
        <small style={{ color: "var(--color-muted)", fontSize: "0.82rem" }}>{hint}</small>
      )}
    </div>
  );
}
