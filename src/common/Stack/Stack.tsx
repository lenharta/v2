import clsx from 'clsx';
import * as React from 'react';
import { StackRootComponent } from '@/types';

export const Stack: StackRootComponent = React.forwardRef((props, ref) => {
  const {
    gap,
    align = 'start',
    justify = 'start',
    children,
    className,
    component: Component = 'div',
    ...otherProps
  } = props;

  const clxss = clsx(
    'Stack',
    { [`Stack--gap-${gap}`]: gap },
    { [`Stack--align-${align}`]: align },
    { [`Stack--justify-${justify}`]: justify },
    className
  );

  return (
    <Component {...otherProps} aria-orientation="vertical" ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
