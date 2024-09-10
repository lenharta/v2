import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { AccordionItemProvider, useAccordionRootCTX } from '../AccordionContext';

export type AccordionItemFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.AccordionItemProps;
  element: 'div';
}>;

export const AccordionItem = Component<AccordionItemFactory>(
  ({ value, variant, children, className, ...props }, ref) => {
    const ctx = useAccordionRootCTX();
    return (
      <div
        {...props}
        {...(ctx.chevronRotation ? { 'data-active': ctx.isValueActive(value) } : {})}
        className={clsx('v2-accordion-item', className)}
        ref={ref}
      >
        <AccordionItemProvider value={{ value, variant: variant || ctx.variant }}>
          {children}
        </AccordionItemProvider>
      </div>
    );
  }
);

AccordionItem.displayName = '@v2/Accordion.Item';
