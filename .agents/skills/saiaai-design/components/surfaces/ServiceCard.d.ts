import * as React from "react";

/** Services-grid card: serif heading, muted description, and a TextLink CTA. */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  href?: string;
  linkLabel?: string;
  children?: React.ReactNode;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
