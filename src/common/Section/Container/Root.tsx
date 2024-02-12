import clsx from 'clsx';
import * as React from 'react';
import { SectionContainerRootComponent } from '@/types/Section';

export const SectionContainer: SectionContainerRootComponent = React.forwardRef((props, ref) => {
  const { children, className, component: Component = 'div', ...otherProps } = props;
  const clxss = clsx('SectionContainer', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
