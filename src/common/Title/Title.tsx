import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types/core';
import { Align, Size } from '@/types/common';

export type TitleProps = {
  size?: Size;
  align?: Align;
};

export type TitleFactory = Core.RefFactory<{
  ref: HTMLHeadingElement;
  props: TitleProps;
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>;

export const Title: TitleFactory = React.forwardRef((props, ref) => {
  const {
    size,
    align = 'start',
    children,
    className,
    component: Component = 'h2',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Title',
    { [`Title--${Component}`]: Component },
    { [`Title--size-${size}`]: size },
    { [`Title--align-${align}`]: align },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
