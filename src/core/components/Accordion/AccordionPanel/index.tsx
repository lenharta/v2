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

export const AccordionPanel = Component<AccordionPanelFactory>(
  ({ className, children, variant, size, component: Component = 'div', ...props }, ref) => {
    const rootContext = useAccordionRootCTX();
    const itemContext = useAccordionItemCTX();

    return (
      <Disclosure
        {...props}
        ref={ref}
        role="region"
        id={rootContext.getPanelId(itemContext.value)}
        isOpen={rootContext.isValueActive(itemContext.value) ? true : false}
        aria-labelledby={rootContext.getTargetId(itemContext.value)}
        className={clsx(
          'v2-accordion-panel',
          `v2-accordion-panel--${size || itemContext.size || rootContext.size || 'sm'}`,
          `v2-accordion-panel--${variant || itemContext.variant || rootContext.variant || 'default'}`,
          className
        )}
      >
        {children}
      </Disclosure>
    );
  }
);

AccordionPanel.displayName = '@v2/Accordion.Panel';
