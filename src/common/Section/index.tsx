import * as React from 'react';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import clsx from 'clsx';

export type SectionElementProps = React.ComponentPropsWithoutRef<'section'>;
export type SectionAttributeProps = React.RefAttributes<HTMLDivElement>;
export type SectionBaseProps = SectionElementProps & SectionAttributeProps;

export interface SectionProps extends SectionBaseProps {
  scheme?: 'primary' | 'secondary' | 'accent';
}

const _Section = (props: SectionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { scheme, ...otherProps } = props;
  const clxss = clsx('sec', 'sec-root', `sec--scheme-${scheme}`);
  return <section className={clxss} ref={ref} {...otherProps} />;
};

export type SectionComponent = React.ForwardRefExoticComponent<SectionProps> & {
  Header: typeof SectionHeader;
  Content: typeof SectionContent;
};

export const Section = React.forwardRef(_Section) as SectionComponent;

Section.displayName = '@v2/Sect';
Section.Content = SectionContent;
Section.Header = SectionHeader;
