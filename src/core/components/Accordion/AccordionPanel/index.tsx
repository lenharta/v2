import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Disclosure, DisclosureProps } from '@/core/components';
import { AccordionPanelCSS, AccordionPanelProps } from '../types';
import { useAccordionContext, useAccordionItemContext } from '../Accordion.context';

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps & Partial<DisclosureProps>;
}>;

const css: AccordionPanelCSS = {
  root: 'v2-accordion-panel-root',
};

const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();

  return (
    <Disclosure
      {...forwardedProps}
      id={ctx.getPanelId(value)}
      ref={ref}
      role="region"
      isOpen={ctx.isValueActive(value)}
      className={clsx(css.root, className)}
      aria-labelledby={ctx.getTargetId(value)}
      data-accordion-panel
    >
      {children}
    </Disclosure>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
