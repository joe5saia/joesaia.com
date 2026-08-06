import * as React from "react";

/** Pill-shaped gold-bordered keyword chip (service areas, specialties). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
