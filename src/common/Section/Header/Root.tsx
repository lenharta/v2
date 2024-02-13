import clsx from 'clsx';
import * as React from 'react';
import { Title } from '@/common';
import { SectionHeaderRootComponent } from '@/types';

export const SectionHeader: SectionHeaderRootComponent = React.forwardRef((props, ref) => {
  const {
    title,
    titleProps,
    className,
    children,
    component: Component = 'header',
    ...otherProps
  } = props;

  const clxss = clsx('SectionHeader', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {title && <Title component="h2" {...titleProps} children={title} />}
      {children}
    </Component>
  );
});
