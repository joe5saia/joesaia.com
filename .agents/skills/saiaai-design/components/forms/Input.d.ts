import * as React from "react";

/** Labelled text input — cream field, hairline border, gold focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text shown below the field. */
  hint?: string;
}

export function Input(props: InputProps): JSX.Element;
