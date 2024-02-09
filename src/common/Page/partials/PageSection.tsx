import clsx from 'clsx';
import * as React from 'react';
import { type ExoticComponent } from '@/types';

export type PageSectionProps = {};

export type PageSectionComponent = ExoticComponent<'section', PageSectionProps>;

export const PageSection: PageSectionComponent = React.forwardRef((props, ref) => {
  const { children, component: Component = 'section', className, ...otherProps } = props;
  const clxss = clsx('page-section', className);
  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {children}
    </Component>
  );
});

PageSection.displayName = 'v2/Page.Section';
