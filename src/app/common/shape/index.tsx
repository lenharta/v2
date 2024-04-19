import { ShapeCircle } from './ShapeCircle';
import { ShapeRect } from './ShapeRect';
import { ShapeLine } from './ShapeLine';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface ShapeProps {
  /** Defines the position and dimension, in user space, of an SVG viewport. */
  viewBox?: (string | number)[] | undefined;
  /** Defines the content of the element. */
  children?: React.ReactNode | undefined;
}

type ShapeFactory = Factory.Config<{
  ref: SVGSVGElement;
  comp: 'svg';
  props: ShapeProps;
  omits: 'viewBox';
  comps: {
    Circle: typeof ShapeCircle;
    Line: typeof ShapeLine;
    Rect: typeof ShapeRect;
  };
}>;

export const Shape = factory<ShapeFactory>((props, ref) => {
  const { children, height = 100, width = 100, viewBox = [0, 0, 100, 100] } = props;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox.join(' ')}
      children={children}
    />
  );
});

Shape.displayName = '@v2/app/Shape';
Shape.Circle = ShapeCircle;
Shape.Line = ShapeLine;
Shape.Rect = ShapeRect;
