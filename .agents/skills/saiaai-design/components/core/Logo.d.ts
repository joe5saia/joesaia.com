import * as React from "react";

/**
 * The SaiaAI logo — North Star mark + wordmark lockup. The canonical brand signature.
 *
 * @startingPoint section="Brand" subtitle="SaiaAI logo lockup" viewport="700x200"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Mark beside (horizontal) or above (stacked) the wordmark. */
  orientation?: "horizontal" | "stacked";
  /** Lockup size. */
  size?: "sm" | "md" | "lg";
  /** Render light for ink/dark backgrounds. */
  onDark?: boolean;
}

export function Logo(props: LogoProps): JSX.Element;
