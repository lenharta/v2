import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';

export interface SectionProps extends Core.BaseProps {
  scheme?: Core.Scheme | undefined;
}

export type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionProps;
  comps: {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
  };
}>;

export const Section = factory<SectionFactory>((props, ref) => {
  const { scheme = 'primary', children, className, ...otherProps } = props;
  const dataProps = { 'data-scheme': scheme };
  return (
    <section {...otherProps} {...dataProps} className={clsx('sec', className)} ref={ref}>
      {children}
    </section>
  );
});

Section.displayName = '@v2/site/Section';
Section.Header = SectionHeader;
Section.Content = SectionContent;
