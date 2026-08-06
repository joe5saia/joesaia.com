import React from "react";

/**
 * SaiaAI Button — square-cornered, uppercase, letter-spaced.
 * Variants mirror the marketing site: primary (dark), ghost (outlined cream), dark.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: size === "sm" ? 40 : 48,
    border: "1px solid transparent",
    borderRadius: "var(--radius-button)",
    padding: size === "sm" ? "0.55rem 0.9rem" : "0.75rem 1.05rem",
    fontFamily: "var(--font-sans)",
    fontSize: size === "sm" ? "0.9rem" : "1rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 160ms ease, box-shadow 160ms ease, background 160ms ease",
  };

  const variants = {
    primary: {
      background: "var(--color-ink)",
      color: "var(--color-cream-2)",
      boxShadow: "var(--shadow-button)",
    },
    ghost: {
      borderColor: "var(--gold-border-34)",
      background: "rgba(250, 248, 242, 0.72)",
      color: "var(--color-ink)",
    },
    dark: {
      background: "var(--color-ink)",
      color: "var(--color-cream-2)",
    },
  };

  const props = {
    style: { ...base, ...variants[variant], ...style },
    onMouseEnter: (e) => (e.currentTarget.style.transform = "translateY(-1px)"),
    onMouseLeave: (e) => (e.currentTarget.style.transform = "translateY(0)"),
    ...rest,
  };

  return href ? (
    <a href={href} {...props}>{children}</a>
  ) : (
    <button type="button" {...props}>{children}</button>
  );
}
