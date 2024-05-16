import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

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
