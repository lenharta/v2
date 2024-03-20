import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface PageContentProps extends ElementProps<'main'> {}

const defaultProps: Partial<PageContentProps> = {};

export const PageContent = React.forwardRef<HTMLElement, PageContentProps>((props, ref) => {
  const { children, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <main {...otherProps} ref={ref} className="page-content">
      {children}
    </main>
  );
});

PageContent.displayName = '@v2/Page.Content';
