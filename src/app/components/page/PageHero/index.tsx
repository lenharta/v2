import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';

export const PageHero = React.forwardRef<HTMLElement, ElementProps<'header'>>(
  ({ children, className, ...otherProps }, ref) => (
    <header {...otherProps} ref={ref} className={clsx('page-hero', className)}>
      <div className="inner">{children}</div>
    </header>
  )
);

PageHero.displayName = '@v2/Page.Hero';
