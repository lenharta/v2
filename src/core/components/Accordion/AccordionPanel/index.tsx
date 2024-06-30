import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Disclosure, DisclosureProps } from '@/core';
import { AccordionPanelProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../context';

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps & Partial<DisclosureProps>;
}>;

const AccordionPanel = createFactory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;

  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  return (
    <Disclosure
      id={ctx.getPanelId(value)}
      ref={ref}
      role="region"
      isOpen={ctx.isValueActive(value)}
      className={clsx('v2-accordion-panel', className)}
      aria-labelledby={ctx.getTargetId(value)}
      {...forwardedProps}
    >
      {children}
    </Disclosure>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
