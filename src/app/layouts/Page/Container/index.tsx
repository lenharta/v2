import * as React from 'react';
import type { Core } from '@/types/core';

export type PageContainerProps = {};

export type PageContainerFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageContainerProps;
  component: 'main';
}>;

export const PageContainer: PageContainerFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'main', ...otherProps } = props;
  return (
    <Component {...otherProps} className="Page-container" ref={ref}>
      {children}
    </Component>
  );
});

PageContainer.displayName = '@v2/Page.Container';
