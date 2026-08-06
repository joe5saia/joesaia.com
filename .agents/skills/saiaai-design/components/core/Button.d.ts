import * as React from "react";

/**
 * Primary call-to-action button for SaiaAI. Square corners, uppercase, gold/ink palette.
 *
 * @startingPoint section="Core" subtitle="Square-cornered CTA button" viewport="700x160"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. */
  variant?: "primary" | "ghost" | "dark";
  /** Sizing. */
  size?: "sm" | "md";
  /** Render as an anchor when provided. */
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
