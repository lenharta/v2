import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface SectionProps {}

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionProps;
}>;

const Section = factory<SectionFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-Section', className)}
      component="section"
      ref={ref}
    >
      {children}
    </Box>
  );
});

Section.displayName = '@v2/Section';
export { Section, type SectionProps };
