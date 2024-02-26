import clsx from 'clsx';
import * as React from 'react';

export type SectionHeaderBaseProps = React.JSX.IntrinsicElements['header'];

export interface SectionHeaderProps extends SectionHeaderBaseProps {}

export const SectionHeader = React.forwardRef<HTMLElement, SectionHeaderProps>((props, ref) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Section-header', className);
  return (
    <header {...otherProps} ref={ref} className={clxss}>
      {children}
    </header>
  );
});

SectionHeader.displayName = '@v2/Section.Header';
