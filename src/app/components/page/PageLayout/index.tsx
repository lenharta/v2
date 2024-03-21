import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';

export const PageLayout = React.forwardRef<HTMLDivElement, ElementProps<'div'>>(
  ({ children, className, ...otherProps }, ref) => (
    <div
      {...otherProps}
      id="page"
      ref={ref}
      children={children}
      className={clsx('page-layout', className)}
    />
  )
);

PageLayout.displayName = '@v2/Page.Layout';
