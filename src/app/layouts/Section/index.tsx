import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import type { Core } from '@/types/core';

export type SectionProps = {};

export type SectionFactory = Core.BaseFactory<{
  props: SectionProps;
  component: 'section';
  components: {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
  };
}>;

export const Section: SectionFactory = (props) => {
  const { children, component: Component = 'section', ...otherProps } = props;
  return <Component {...otherProps}>{children}</Component>;
};

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
