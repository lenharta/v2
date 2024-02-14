import clsx from 'clsx';
import * as React from 'react';
import { TextRootComponent } from '@/types';

export const Text: TextRootComponent = React.forwardRef((props, ref) => {
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
