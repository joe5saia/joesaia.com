import * as React from "react";

/** Inline text link with gold underline and an arrow that slides on hover. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  /** Use lighter gold for dark backgrounds. */
  light?: boolean;
  children?: React.ReactNode;
}

export function TextLink(props: TextLinkProps): JSX.Element;
