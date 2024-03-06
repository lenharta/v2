import * as React from 'react';

export type SectionHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
export type SectionHeaderAttributeProps = React.RefAttributes<HTMLElement>;
export type SectionHeaderBaseProps = SectionHeaderElementProps & SectionHeaderAttributeProps;

export interface SectionHeaderProps extends SectionHeaderBaseProps {}

const _SectionHeader = (props: SectionHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props;
  return <header className="sec sec-header" ref={ref} {...otherProps} />;
};

export type SectionHeaderComponent = React.ForwardRefExoticComponent<SectionHeaderProps> & {};

export const SectionHeader = React.forwardRef(_SectionHeader) as SectionHeaderComponent;
