import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface ShapeRectProps {
  // The x coordinate of the rect.
  x?: string | undefined;
  // The y coordinate of the rect.
  y?: string | undefined;
  // The horizontal corner radius of the rect. Defaults to ry if it is specified.
  rx?: string | undefined;
  // The vertical corner radius of the rect. Defaults to rx if it is specified.
  ry?: string | undefined;
  // Defines the color.
  fill?: React.CSSProperties['fill'] | undefined;
  // The height of the rect.
  width?: string | undefined;
  // The width of the rect.
  height?: string | undefined;
  // Defines the stroke color.
  stroke?: React.CSSProperties['stroke'] | undefined;
  // Defines the stroke width
  strokeWidth?: React.CSSProperties['strokeWidth'] | undefined;
}

type ShapeRectFactory = Factory.Config<{
  ref: SVGRectElement;
  comp: 'rect';
  props: ShapeRectProps;
}>;

export const ShapeRect = factory<ShapeRectFactory>((props, ref) => {
  const { width = 100, height = 100, ...otherProps } = props;
  return <rect {...otherProps} ref={ref} width={width} height={height} />;
});

ShapeRect.displayName = '@v2/app/Shape.Rect';
