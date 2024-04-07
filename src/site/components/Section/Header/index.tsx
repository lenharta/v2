import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SectionHeaderProps extends Core.BaseProps {}

export type SectionHeaderFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionHeaderProps;
}>;

export const SectionHeader = factory<SectionHeaderFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className={className}>
      {children}
    </header>
  );
});

SectionHeader.displayName = '@v2/site/Section.Header';
