import * as React from 'react';
import type { Align, Justify, Size } from '@/types';

export type StackProps = React.JSX.IntrinsicElements['div'] & {
  justify?: Justify;
  align?: Align;
  gap?: Size;
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const { gap = 'xs', align = 'start', justify = 'start', children, ...otherProps } = props;

  const clxss = `stack stack--gap-${gap} stack--align-${align} stack--justify-${justify}`;

  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
});
