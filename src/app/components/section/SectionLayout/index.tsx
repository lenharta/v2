import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types';

export interface SectionLayoutProps extends ElementProps<'div'> {}

const defaultProps: Partial<SectionLayoutProps> = {};

export const SectionLayout = React.forwardRef<HTMLDivElement, SectionLayoutProps>((props, ref) => {
  const { className, ...otherProps } = mergeProps(defaultProps, props);
  return <div {...otherProps} ref={ref} className={clsx('section-layout', className)} />;
});
