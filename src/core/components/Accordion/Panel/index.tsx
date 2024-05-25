import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { AccordionPanelProps } from '../Accordion.types';

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps;
}>;

const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      data-accordion-panel
      className={clsx('v2-accordion-panel', className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
