import clsx from 'clsx';
import * as React from 'react';
import { TitleRootComponent } from '@/types';

export const Title: TitleRootComponent = React.forwardRef((props, ref) => {
  const { component: Component = 'h2', children, className, ...otherProps } = props;
  const clxss = clsx('Title', `Title--${Component}`, className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
