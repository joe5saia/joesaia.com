import * as React from "react";

/**
 * The SaiaAI logotype — serif "Saia" + gold "AI". The canonical brand lockup.
 *
 * @startingPoint section="Brand" subtitle="SaiaAI serif wordmark" viewport="700x140"
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Logotype size. */
  size?: "sm" | "md" | "lg";
  /** Render light for ink/dark backgrounds. */
  onDark?: boolean;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
