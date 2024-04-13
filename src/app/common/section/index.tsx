import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { SectionContent } from './SectionContent';
import { SectionHeader } from './SectionHeader';

interface SectionProps {}

export type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionProps;
  comps: {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
  };
}>;

export const Section = factoryPolymorphic<SectionFactory>((props, ref) => {
  const { component: Component = 'section', className, children, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} className={clsx('section', className)}>
      {children}
    </Component>
  );
});

Section.displayName = '@v2/app/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
