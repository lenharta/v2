import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface PageSectionProps extends ElementProps<'section'> {}

const defaultProps: Partial<PageSectionProps> = {};

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>((props, ref) => {
  const { className, children, ...otherProps } = mergeProps(defaultProps, props);

  const clxss = clsx('page-section', className);

  return <section {...otherProps} ref={ref} className={clxss} children={children} />;
});

PageSection.displayName = '@v2/Page.Section';
