import React from "react";

/**
 * BrandMark — the SaiaAI North Star symbol. A four-point guiding star with a
 * single twinkle, in gold. Use standalone (favicon, avatar, stamp) or inside the Logo lockup.
 */
export function BrandMark({ size = 40, solo = false, title = "SaiaAI", style, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      style={{ display: "block", flex: "none", ...style }}
      {...rest}
    >
      {!solo && (
        <path
          d="M45.5 8 L47 13.6 L52.6 15 L47 16.4 L45.5 22 L44 16.4 L38.4 15 L44 13.6 Z"
          fill="var(--color-gold)"
          opacity="0.92"
        />
      )}
      <path
        d={solo
          ? "M32 3 L35.2 28.8 L61 32 L35.2 35.2 L32 61 L28.8 35.2 L3 32 L28.8 28.8 Z"
          : "M30 6 L33 30 L57 33 L33 36 L30 60 L27 36 L3 33 L27 30 Z"}
        fill="var(--color-gold)"
      />
    </svg>
  );
}
