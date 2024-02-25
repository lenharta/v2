import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { SizeExpanded } from '@/types/common';

export type SectionContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface SectionContentProps extends SectionContentBaseProps {
  gap?: SizeExpanded;
  py?: SizeExpanded;
  px?: SizeExpanded;
}

const defaultProps: Partial<SectionContentProps> = {};

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  (props, ref) => {
    const { px, py, gap, children, className, ...otherProps } = props;

    const mergedProps = mergeProps({ px, py, gap }, defaultProps);

    const clxss = clsx(
      'Section-content',
      { [`Section-content--gap-${mergedProps.gap}`]: mergedProps.gap },
      { [`Section-content--px-${mergedProps.px}`]: mergedProps.px },
      { [`Section-content--py-${mergedProps.py}`]: mergedProps.py },
      className
    );

    return (
      <div {...otherProps} ref={ref} className={clxss}>
        {children}
      </div>
    );
  }
);

SectionContent.displayName = '@v2/SectionContent';
