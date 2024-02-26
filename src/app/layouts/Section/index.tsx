import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import { type Scheme } from '@/types/common';

export type SectionBaseProps = React.JSX.IntrinsicElements['section'];

export interface SectionProps extends SectionBaseProps {
  scheme?: Scheme;
}

export interface SectionComponent {
  (props: SectionProps): JSX.Element | null;
  Header: typeof SectionHeader;
  Content: typeof SectionContent;
  displayName?: string;
}

const defaultProps: Partial<SectionProps> = {
  scheme: 'primary',
};

export const Section: SectionComponent = (props) => {
  const { scheme, children, className, ...otherProps } = props;
  const mergedProps = mergeProps({ scheme }, defaultProps);
  const clxss = clsx('Section', mergedProps.scheme, className);
  return (
    <section {...otherProps} className={clxss}>
      {children}
    </section>
  );
};

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
