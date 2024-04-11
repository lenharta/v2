import clsx from 'clsx';
import { Factory } from '@/types';
import { SectionContent } from './Content';
import { factoryPolymorphic } from '@/core/factory';

export type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: {};
  comps: {
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
