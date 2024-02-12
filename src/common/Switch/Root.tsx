import clsx from 'clsx';
import * as React from 'react';
import { SwitchRootComponent } from '@/types';

export const Switch: SwitchRootComponent = React.forwardRef((props, ref) => {
  const { component: Component = 'button', className, children, ...otherProps } = props;
  const clxss = clsx('Switch', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
