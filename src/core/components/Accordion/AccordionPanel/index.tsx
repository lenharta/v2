import clsx from 'clsx';
import { Factory } from '@/types';
import { factory, Disclosure, DisclosureProps } from '@/core';
import { AccordionCSS, AccordionPanelProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../Accordion.context';

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps & Partial<DisclosureProps>;
}>;

const css: Partial<AccordionCSS> = {
  panel: 'v2-accordion-panel',
};

const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;

  const ctx = useAccordionContext();
  const { value } = useAccordionItemContext();

  return (
    <Disclosure
      id={ctx.getPanelId(value)}
      ref={ref}
      role="region"
      isOpen={ctx.isValueActive(value)}
      className={clsx(css.panel, className)}
      aria-labelledby={ctx.getTargetId(value)}
      {...forwardedProps}
    >
      {children}
    </Disclosure>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
