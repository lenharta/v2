import clsx from 'clsx';
import * as React from 'react';
import type { Align, Justify, Size } from '@/types';

export type StackBaseProps = React.JSX.IntrinsicElements['div'];

export interface StackProps extends StackBaseProps {
  gap?: Size;
  align?: Align;
  justify?: Justify;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { gap = 'xs', align = 'start', justify = 'start', children, ...otherProps } = props;

  const clxss = clsx('stack', {
    [`stack--gap-${gap}`]: gap,
    [`stack--align-${align}`]: align,
    [`stack--justify-${justify}`]: justify,
  });

  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
});
