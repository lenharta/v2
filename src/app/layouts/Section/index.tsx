import clsx from 'clsx';
import * as React from 'react';
import { Page } from '../Page';
import { mergeProps } from '@/utils';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import { type Scheme, type SizeExpanded } from '@/types/common';

export type SectionBaseProps = React.JSX.IntrinsicElements['section'];

export interface SectionProps extends SectionBaseProps {
  scheme?: Scheme;
  size?: SizeExpanded;
}

export interface SectionComponent {
  (props: SectionProps): JSX.Element | null;
  Header: typeof SectionHeader;
  Content: typeof SectionContent;
  displayName?: string;
}

const defaultProps: Partial<SectionProps> = {
  scheme: 'primary',
  size: 'sm',
};

export const Section: SectionComponent = (props) => {
  const { size, scheme, children, className, ...otherProps } = props;

  const mergedProps = mergeProps({ size, scheme }, defaultProps);

  const clxss = clsx(
    'Section',
    { [`Section--size-${mergedProps.size}`]: mergedProps.size },
    mergedProps.scheme,
    className
  );

  return (
    <section {...otherProps} className={clxss}>
      <Page.Container>{children}</Page.Container>
    </section>
  );
};

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
