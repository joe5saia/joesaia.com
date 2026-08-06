import * as React from "react";

/**
 * The SaiaAI North Star symbol — a gold four-point guiding star with a twinkle.
 *
 * @startingPoint section="Brand" subtitle="SaiaAI North Star mark" viewport="700x200"
 */
export interface BrandMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** Pixel size (square). */
  size?: number;
  /** Use the single-star variant (drops the twinkle) for favicons / tiny sizes. */
  solo?: boolean;
  /** Accessible label. */
  title?: string;
}

export function BrandMark(props: BrandMarkProps): JSX.Element;
