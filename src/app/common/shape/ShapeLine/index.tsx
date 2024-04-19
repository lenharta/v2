import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface ShapeLineProps {
  // Defines the x-axis coordinate of the line starting point.
  x1?: string | undefined;
  // Defines the x-axis coordinate of the line end point.
  x2?: string | undefined;
  // Defines the y-axis coordinate of the line starting point.
  y1?: string | undefined;
  // Defines the y-axis coordinate of the line end point.
  y2?: string | undefined;
  // Defines the color.
  fill?: React.CSSProperties['fill'] | undefined;
  // Defines the stroke color, If you do not specify the stroke color the line will not be visible.
  stroke?: React.CSSProperties['stroke'] | undefined;
  // Defines the stroke width
  strokeWidth?: React.CSSProperties['strokeWidth'] | undefined;
}

type ShapeLineFactory = Factory.Config<{
  ref: SVGLineElement;
  comp: 'line';
  props: ShapeLineProps;
}>;

export const ShapeLine = factory<ShapeLineFactory>((props, ref) => {
  const { x1 = 0, y1 = 80, x2 = 100, y2 = 20, ...otherProps } = props;
  return <line {...otherProps} x1={x1} y1={y1} x2={x2} y2={y2} ref={ref} />;
});

ShapeLine.displayName = '@v2/app/Shape.Line';
