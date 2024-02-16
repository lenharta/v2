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
    <div {...otherProps} className="Page-content" ref={ref}>
      <div className="Page-container">{children}</div>
    </div>
  );
});

PageContent.displayName = '@v2/PageContent';
