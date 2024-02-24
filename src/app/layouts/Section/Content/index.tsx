import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import type { SizeExpanded } from '@/types/common';

export type SectionContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface SectionContentProps extends SectionContentBaseProps {
  size?: SizeExpanded;
}

const defaultProps: Partial<SectionContentProps> = {
  size: 'sm',
};

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  (props, ref) => {
    const { size, children, className, ...otherProps } = props;

    const mergedProps = mergeProps({ size }, defaultProps);

    const clxss = clsx('Section-content', {
      [`Section-content--size-${mergedProps.size}`]: mergedProps.size,
    });

    return (
      <div {...otherProps} ref={ref} className={clxss}>
        {children}
      </div>
    );
  }
);

SectionContent.displayName = '@v2/SectionContent';
