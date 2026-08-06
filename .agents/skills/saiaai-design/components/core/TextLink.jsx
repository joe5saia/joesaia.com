import React from "react";

/**
 * TextLink — inline link with a gold underline and a sliding arrow affordance.
 */
export function TextLink({ href = "#", children, light = false, style, ...rest }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        color: light ? "var(--color-gold)" : "var(--color-ink)",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        textDecoration: "underline",
        textDecorationColor: "rgba(194, 164, 95, 0.72)",
        textDecorationThickness: "2px",
        textUnderlineOffset: "5px",
        ...style,
      }}
      onMouseEnter={(e) => {
        const a = e.currentTarget.querySelector("[data-arrow]");
        if (a) a.style.transform = "translateX(3px)";
      }}
      onMouseLeave={(e) => {
        const a = e.currentTarget.querySelector("[data-arrow]");
        if (a) a.style.transform = "translateX(0)";
      }}
      {...rest}
    >
      {children}
      <span data-arrow style={{ marginLeft: "0.35rem", transition: "transform 160ms ease" }}>→</span>
    </a>
  );
}
