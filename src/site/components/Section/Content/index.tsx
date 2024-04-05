import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import clsx from 'clsx';

export interface SectionContentProps extends Core.BaseProps {}

export type SectionContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SectionContentProps;
}>;

export const SectionContent = factory<SectionContentFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx('sec-content', className)}>
      {children}
    </div>
  );
});

SectionContent.displayName = '@v2/site/Section.Content';
