import clsx from 'clsx';
import * as React from 'react';

export type SectionContentElementProps = React.ComponentPropsWithoutRef<'div'>;
export type SectionContentAttributeProps = React.RefAttributes<HTMLDivElement>;
export type SectionContentBaseProps = SectionContentElementProps & SectionContentAttributeProps;

export interface SectionContentProps extends SectionContentBaseProps {}

const _SectionContent = (props: SectionContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  const clxss = clsx('sec', 'sec-content', className);
  return <div className={clxss} ref={ref} {...otherProps} />;
};

export type SectionContentComponent = React.ForwardRefExoticComponent<SectionContentProps> & {};

export const SectionContent = React.forwardRef(_SectionContent) as SectionContentComponent;
