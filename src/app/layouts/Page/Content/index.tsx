import * as React from 'react';
import type { Core } from '@/types/core';

export type PageContentProps = {};

export type PageContentFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageContentProps;
  component: 'main';
}>;

export const PageContent: PageContentFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'main', ...otherProps } = props;
  return (
    <Component {...otherProps} className="Page-content" ref={ref}>
      {children}
    </Component>
  );
});

PageContent.displayName = '@v2/Page.Content';
