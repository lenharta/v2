import * as React from 'react';
import { PageContainer } from '../Container';
import type { Core } from '@/types/core';

export type PageFooterProps = {};

export type PageFooterFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageFooterProps;
  component: 'footer';
}>;

export const PageFooter: PageFooterFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'footer', ...otherProps } = props;
  return (
    <Component {...otherProps} className="Page-footer" ref={ref}>
      <PageContainer>{children}</PageContainer>
    </Component>
  );
});

PageFooter.displayName = '@v2/Page.Footer';
