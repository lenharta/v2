import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types/core';
import { Align, Size } from '@/types/common';

export type LabelProps = {
  size?: Size;
  align?: Align;
};

export type LabelFactory = Core.RefFactory<{
  ref: HTMLLabelElement;
  props: LabelProps;
  component: 'label';
}>;

export const Label: LabelFactory = React.forwardRef((props, ref) => {
  const { size, align, component: Component = 'label', className, children, ...otherProps } = props;

  const clxss = clsx(
    'Label',
    { [`Label--size-${size}`]: size },
    { [`Label--align-${align}`]: align },
    className
  );

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
