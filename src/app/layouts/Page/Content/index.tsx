import * as React from 'react';
import type { Core } from '@/types/core';
import clsx from 'clsx';

export type PageContentProps = {
  variant?: 'default';
};

export type PageContentFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: PageContentProps;
  component: 'main';
}>;

export const PageContent: PageContentFactory = React.forwardRef((props, ref) => {
  const { variant = 'default', children, component: Component = 'main', ...otherProps } = props;
  const clxss = clsx('Page-content', { [`Page-content--${variant}`]: variant });
  return (
    <Component {...otherProps} className={clxss} ref={ref}>
      {children}
    </Component>
  );
});

PageContent.displayName = '@v2/Page.Content';
