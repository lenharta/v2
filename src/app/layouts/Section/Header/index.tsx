import clsx from 'clsx';
import * as React from 'react';
import { Title } from '@/common';
import { mergeProps } from '@/utils';
import { type SizeExpanded } from '@/types/common';

export type SectionHeaderBaseProps = React.JSX.IntrinsicElements['header'];

export interface SectionHeaderProps extends SectionHeaderBaseProps {
  title?: string;
  gap?: SizeExpanded;
  px?: SizeExpanded;
  py?: SizeExpanded;
}

const defaultProps: Partial<SectionHeaderProps> = {};

export const SectionHeader = React.forwardRef<HTMLElement, SectionHeaderProps>((props, ref) => {
  const { px, py, gap, title, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ px, py, gap }, defaultProps);

  const clxss = clsx(
    'Section-header',
    { [`Section-header--gap-${mergedProps.gap}`]: mergedProps.gap },
    { [`Section-header--px-${mergedProps.px}`]: mergedProps.px },
    { [`Section-header--py-${mergedProps.py}`]: mergedProps.py },
    className
  );

  return (
    <header {...otherProps} ref={ref} className={clxss}>
      {children}
    </header>
  );
});

SectionHeader.displayName = '@v2/SectionHeader';
