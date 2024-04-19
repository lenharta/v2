import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface ShapeCircleProps {
  // The x-axis coordinate of the center of the circle.
  cx?: string | undefined;
  // The y-axis coordinate of the center of the circle.
  cy?: string | undefined;
  // The radius of the circle. A value lower or equal to zero disables rendering of the circle.
  r?: string | undefined;
  // Defines the color.
  fill?: React.CSSProperties['fill'] | undefined;
  // Defines the stroke color.
  stroke?: React.CSSProperties['stroke'] | undefined;
  // Defines the stroke width
  strokeWidth?: React.CSSProperties['strokeWidth'] | undefined;
}

type ShapeCircleFactory = Factory.Config<{
  ref: SVGCircleElement;
  comp: 'circle';
  props: ShapeCircleProps;
}>;

export const ShapeCircle = factory<ShapeCircleFactory>((props, ref) => {
  const { r = 50, cx = 50, cy = 50, fill = 'white', ...otherProps } = props;
  return <circle {...otherProps} r={r} cx={cx} cy={cy} ref={ref} fill={fill} />;
});

ShapeCircle.displayName = '@v2/app/Shape.Circle';
