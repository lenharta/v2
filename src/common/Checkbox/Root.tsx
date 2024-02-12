import clsx from 'clsx';
import * as React from 'react';
import { CheckboxRootComponent } from '@/types';

export const Checkbox: CheckboxRootComponent = React.forwardRef((props, ref) => {
  const { component: Component = 'button', className, children, ...otherProps } = props;
  const clxss = clsx('Checkbox', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
