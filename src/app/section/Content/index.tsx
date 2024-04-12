import clsx from 'clsx';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

type SectionContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

export const SectionContent = factory<SectionContentFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <Box {...otherProps} ref={ref} className={clsx('section', className)}>
      {children}
    </Box>
  );
});

SectionContent.displayName = '@v2/app/Section.Content';
