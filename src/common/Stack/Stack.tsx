import clsx from 'clsx';
import * as React from 'react';
import type { Core } from '@/types/core';
import type { Align, Justify, Size } from '@/types';

export type StackProps = {
  gap?: Size;
  align?: Align;
  justify?: Justify;
};

export type StackFactory = Core.RefFactory<{
  component: 'div';
  props: StackProps;
  ref: HTMLDivElement;
}>;

export const Stack: StackFactory = React.forwardRef((props, ref) => {
  const {
    gap,
    align = 'start',
    justify = 'start',
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Stack',
    { [`Stack--gap-${gap}`]: gap },
    { [`Stack--align-${align}`]: align },
    { [`Stack--justify-${justify}`]: justify },
    className
  );

  return (
    <Component {...otherProps} aria-orientation="vertical" ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
