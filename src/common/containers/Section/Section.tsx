import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { SectionRootCSS, SectionRootProps } from './types';

const css: SectionRootCSS = {
  root: 'v2-section-root',
};

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionRootProps;
}>;

const Section = factory<SectionFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="section" className={clsx(css.root, className)}>
      {children}
    </Box>
  );
});

Section.displayName = '@v2/Section.Root';
export { Section };
