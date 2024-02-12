import clsx from 'clsx';
import * as React from 'react';
import { TextRootComponent } from '@/types';

export const Text: TextRootComponent = React.forwardRef((props, ref) => {
  const { size, align, component: Component = 'h2', children, className, ...otherProps } = props;

  const clxss = clsx(
    'Text',
    { [`Text--${Component}`]: Component },
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
