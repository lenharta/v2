import clsx from 'clsx';
import * as React from 'react';
import { TitleRootComponent } from '@/types';

export const Title: TitleRootComponent = React.forwardRef((props, ref) => {
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
