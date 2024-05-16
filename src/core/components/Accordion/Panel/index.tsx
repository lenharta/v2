import clsx from 'clsx';
import { Box } from '@/core/components/Box';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface AccordionPanelProps {}

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps;
}>;

const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('v2-accordion-panel', className)}>
      {children}
    </Box>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel, type AccordionPanelProps };
