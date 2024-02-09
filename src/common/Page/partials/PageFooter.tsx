import clsx from 'clsx';
import * as React from 'react';
import type { ExoticComponent } from '@/types';
import { PageContainer } from './PageContainer';

export type PageFooterProps = {};

export type PageFooterComponent = ExoticComponent<'footer', PageFooterProps>;

export const PageFooter: PageFooterComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'footer', className, ...otherProps } = props;
  const clxss = clsx('page-footer', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      <PageContainer>{children}</PageContainer>
    </Component>
  );
});

PageFooter.displayName = 'v2/Page.Footer';
