import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';

export const PageContent = React.forwardRef<HTMLElement, ElementProps<'main'>>(
  ({ children, className, ...otherProps }, ref) => (
    <main
      {...otherProps}
      ref={ref}
      id="main-content"
      className={clsx('page-content', className)}
      children={children}
    />
  )
);

PageContent.displayName = '@v2/Page.Content';
