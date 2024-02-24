import clsx from 'clsx';
import * as React from 'react';
import { Title } from '@/common';
import { mergeProps } from '@/utils';
import { type SizeExpanded } from '@/types/common';

export type SectionHeaderBaseProps = React.JSX.IntrinsicElements['header'];

export interface SectionHeaderProps extends SectionHeaderBaseProps {
  size?: SizeExpanded;
  title?: string;
}

const defaultProps: Partial<SectionHeaderProps> = {
  size: 'sm',
};

export const SectionHeader = React.forwardRef<HTMLElement, SectionHeaderProps>((props, ref) => {
  const { size, title, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size }, defaultProps);

  const clxss = clsx('Section-header', {
    [`Section-header--size-${mergedProps.size}`]: mergedProps.size,
    className,
  });

  return (
    <header {...otherProps} ref={ref} className={clxss}>
      {title && (
        <Title className="Section-header-title" h2>
          {title}
        </Title>
      )}

      {children}
    </header>
  );
});

SectionHeader.displayName = '@v2/SectionHeader';
