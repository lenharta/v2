import clsx from 'clsx';
import * as React from 'react';

export type SectionHeaderElementProps = React.ComponentPropsWithRef<'header'>;
export type SectionHeaderAttributeProps = React.RefAttributes<HTMLElement>;
export type SectionHeaderBaseProps = SectionHeaderElementProps & SectionHeaderAttributeProps;

export interface SectionHeaderProps extends SectionHeaderBaseProps {}

export const _SectionHeader = (props: SectionHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { children, className, ...otherProps } = props;
  const clxss = clsx('Section-header', className);
  return (
    <header {...otherProps} ref={ref} className={clxss}>
      {children}
    </header>
  );
};

export type SectionHeaderComponent = React.ForwardRefExoticComponent<SectionHeaderProps>;
export const SectionHeader = React.forwardRef(_SectionHeader) as SectionHeaderComponent;
SectionHeader.displayName = '@v2/Section.Header';
