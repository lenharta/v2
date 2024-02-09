import clsx from 'clsx';
import * as React from 'react';
import { type ExoticComponent } from '@/types';
import { PageContainer } from './PageContainer';

export type PageHeaderProps = {};

export type PageHeaderComponent = ExoticComponent<'header', PageHeaderProps>;

export const PageHeader: PageHeaderComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'header', className, ...otherProps } = props;
  const clxss = clsx('page-header', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      <PageContainer>{children}</PageContainer>
    </Component>
  );
});

PageHeader.displayName = 'v2/Page.Header';
