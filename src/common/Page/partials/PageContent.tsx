import * as React from 'react';
import type { ExoticComponent } from '@/types';
import clsx from 'clsx';

export type PageContentProps = {};

export type PageContentComponent = ExoticComponent<'main', PageContentProps>;

export const PageContent: PageContentComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'main', className, ...otherProps } = props;
  const clxss = clsx('page-content', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});

PageContent.displayName = 'v2/Page.Content';
