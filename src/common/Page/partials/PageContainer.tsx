import * as React from 'react';
import type { ExoticComponent } from '@/types';
import clsx from 'clsx';

export type PageContainerProps = {};

export type PageContainerComponent = ExoticComponent<'div', PageContainerProps>;

export const PageContainer: PageContainerComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', className, ...otherProps } = props;
  const clxss = clsx('container', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});

PageContainer.displayName = 'v2/Page.Container';
