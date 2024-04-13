import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

export interface SectionHeaderProps {}

export type SectionHeaderFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'header';
  props: SectionHeaderProps;
}>;

export const SectionHeader = factoryPolymorphic<SectionHeaderFactory>((props, ref) => {
  const { component: Component = 'header', children, className, ...otherProps } = props;
  return (
    <Component {...otherProps} ref={ref} className={clsx('section-header', className)}>
      {children}
    </Component>
  );
});

SectionHeader.displayName = '@v2/app/Section.Header';
