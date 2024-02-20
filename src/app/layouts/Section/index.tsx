import clsx from 'clsx';
import { Page } from '../Page';
import { mergeProps } from '@/utils';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import type { SizeExpanded } from '@/types/common';
import type { Core } from '@/types/core';

export type SectionScheme = 'primary' | 'secondary';

export type SectionProps = {
  py?: SizeExpanded;
  scheme?: SectionScheme;
};

export type SectionFactory = Core.BaseFactory<{
  props: SectionProps;
  component: 'section';
  components: {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
  };
}>;

const defaultProps: Partial<SectionProps> = {
  scheme: 'primary',
};

export const Section: SectionFactory = (props) => {
  const {
    py,
    scheme,
    children,
    className,
    component: Component = 'section',
    ...otherProps
  } = props;

  const mergedProps = mergeProps({ scheme, py }, defaultProps);

  const clxss = clsx(
    'Section',
    { [`Section--py-${mergedProps.py}`]: mergedProps.py },
    mergedProps.scheme,
    className
  );

  return (
    <Component {...otherProps} className={clxss}>
      <Page.Container>{children}</Page.Container>
    </Component>
  );
};

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
