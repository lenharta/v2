import { Scheme } from '@/types/common';
import { mergeProps } from '@/utils';
import clsx from 'clsx';
import * as React from 'react';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';

export type SectionElementProps = React.ComponentPropsWithRef<'section'>;
export type SectionAttributeProps = React.RefAttributes<HTMLDivElement>;
export type SectionBaseProps = SectionElementProps & SectionAttributeProps;

export interface SectionProps extends SectionBaseProps {
  scheme?: Scheme;
}

export const defaultProps: Partial<SectionProps> = {
  scheme: 'primary',
};

export const _Section = (props: SectionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { scheme, children, className, ...otherProps } = props;
  const mergedProps = mergeProps({ scheme }, defaultProps);
  const clxss = clsx('Section', mergedProps.scheme, className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
};

export type SectionComponent = React.ForwardRefExoticComponent<SectionProps> & {
  Content: typeof SectionContent;
  Header: typeof SectionHeader;
};

export const Section = React.forwardRef(_Section) as SectionComponent;

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
