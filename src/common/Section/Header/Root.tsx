import clsx from 'clsx';
import * as React from 'react';
import { SectionHeaderRootComponent } from '@/types/Section';

export const SectionHeader: SectionHeaderRootComponent = React.forwardRef((props, ref) => {
  const { children, className, component: Component = 'header', ...otherProps } = props;
  const clxss = clsx('SectionHeader', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
