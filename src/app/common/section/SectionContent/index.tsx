import clsx from 'clsx';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';

interface SectionContentProps {}

type SectionContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SectionContentProps;
}>;

export const SectionContent = factoryPolymorphic<SectionContentFactory>((props, ref) => {
  const { component: Component = 'div', className, children, ...otherProps } = props;
  return (
    <Box {...otherProps} ref={ref} className={clsx('section-content', className)}>
      {children}
    </Box>
  );
});

SectionContent.displayName = '@v2/app/Section.Content';
