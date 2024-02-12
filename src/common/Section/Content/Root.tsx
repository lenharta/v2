import clsx from 'clsx';
import * as React from 'react';
import { SectionContentRootComponent } from '@/types/Section';

export const SectionContent: SectionContentRootComponent = React.forwardRef((props, ref) => {
  const { children, className, component: Component = 'div', ...otherProps } = props;
  const clxss = clsx('SectionContent', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});
