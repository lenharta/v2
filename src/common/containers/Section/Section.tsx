import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { SectionCSS, SectionRootProps } from './types';

const css: SectionCSS = {
  root: 'v2-section',
};

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionRootProps;
}>;

const Section = factory<SectionFactory>((props, ref) => {
  const { children, className, scheme, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      ref={ref}
      component="section"
      className={clsx(css.root, className)}
      data-scheme={scheme}
    >
      {children}
    </Box>
  );
});

Section.displayName = '@v2/Section.Root';
export { Section };
