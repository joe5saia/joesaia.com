import * as React from "react";

/**
 * Canonical SaiaAI surface — hairline border, 18px radius, cream fill, soft shadow.
 *
 * @startingPoint section="Surfaces" subtitle="Warm cream surface card" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the ink→gold→ink gradient bar across the top. */
  topline?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
