import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Disclosure } from '@/core';
import { useAccordionRootCTX, useAccordionItemCTX } from '../AccordionContext';

type AccordionPanelFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.AccordionPanelProps & Partial<Core.DisclosureProps>;
  element: 'div';
}>;

const AccordionPanel = Component<AccordionPanelFactory>(
  ({ className, children, variant, ...props }, ref) => {
    const rootContext = useAccordionRootCTX();
    const itemContext = useAccordionItemCTX();
    const itemVariant = variant || itemContext.variant || rootContext.variant;

    const contextProps = {
      id: rootContext.getPanelId(itemContext.value),
      isOpen: rootContext.isValueActive(itemContext.value) ? true : false,
      'aria-labelledby': rootContext.getTargetId(itemContext.value),
    };

    return (
      <Disclosure
        {...props}
        {...contextProps}
        ref={ref}
        role="region"
        className={clsx(
          'v2-accordion-panel',
          `v2-accordion-panel--${itemVariant || 'default'}`,
          className
        )}
      >
        {children}
      </Disclosure>
    );
  }
);

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
