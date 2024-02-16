import * as React from 'react';
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
      <div className="Page-container">{children}</div>
    </Component>
  );
});

PageFooter.displayName = '@v2/PageFooter';
