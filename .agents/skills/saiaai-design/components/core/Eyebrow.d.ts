import * as React from "react";

/** Small uppercase gold kicker that sits above headings. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Use the lighter gold for dark backgrounds. */
  light?: boolean;
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
