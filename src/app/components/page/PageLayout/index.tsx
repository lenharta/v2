import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface PageLayoutProps extends ElementProps<'div'> {}

const defaultProps: Partial<PageLayoutProps> = {};

export const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>((props, ref) => {
  const { children, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <div {...otherProps} ref={ref} className="page-layout">
      {children}
    </div>
  );
});

PageLayout.displayName = '@v2/Page.Layout';
