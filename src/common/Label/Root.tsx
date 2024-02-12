import { LabelRootComponent } from '@/types';
import clsx from 'clsx';
import React from 'react';

export const Label: LabelRootComponent = React.forwardRef((props, ref) => {
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
