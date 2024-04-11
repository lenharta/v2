import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';

export interface SectionProps extends Core.BaseProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionProps;
  comps: {
    Content: typeof SectionContent;
    Header: typeof SectionHeader;
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
Section.Content = SectionContent;
Section.Header = SectionHeader;
