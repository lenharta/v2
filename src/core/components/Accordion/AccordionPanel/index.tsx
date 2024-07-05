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
  const { className, children, variant, ...forwardedProps } = props;

  const ctx = useAccordionContext();
  const ctxItem = useAccordionItemContext();

  return (
    <Disclosure
      id={ctx.getPanelId(ctxItem.value)}
      ref={ref}
      role="region"
      isOpen={ctx.isValueActive(ctxItem.value)}
      className={clsx(
        'v2-accordion-panel',
        `v2-accordion-panel--${variant || ctxItem.variant || ctx.variant || 'base-default'}`,
        className
      )}
      aria-labelledby={ctx.getTargetId(ctxItem.value)}
      {...forwardedProps}
    >
      {children}
    </Disclosure>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
