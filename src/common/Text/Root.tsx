import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types/core';
import { Align, Size } from '@/types/common';

export type TextProps = {
  size?: Size;
  align?: Align;
};

export type TextFactory = Core.RefFactory<{
  ref: HTMLParagraphElement;
  props: TextProps;
  component: 'p';
}>;

export const Text: TextFactory = React.forwardRef((props, ref) => {
  const {
    size = 'sm',
    align = 'start',
    children,
    className,
    component: Component = 'p',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Text',
    { [`Text--size-${size}`]: size },
    { [`Text--align-${align}`]: align },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
