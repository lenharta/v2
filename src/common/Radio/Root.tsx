import clsx from 'clsx';
import * as React from 'react';
import { RadioRootComponent } from '@/types';

export const Radio: RadioRootComponent = React.forwardRef((props, ref) => {
  const { component: Component = 'button', className, children, ...otherProps } = props;
  const clxss = clsx('Radio', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
