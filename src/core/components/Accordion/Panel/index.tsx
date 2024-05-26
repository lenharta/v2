import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { AccordionPanelProps } from '../Accordion.types';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import { Disclosure, DisclosureProps } from '../../Disclosure';

type AccordionPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionPanelProps & Partial<DisclosureProps>;
}>;

const AccordionPanel = factory<AccordionPanelFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();

  const classNames = {
    ['v2-accordion-item--elevated']: ctx.elevated,
  };

  return (
    <Disclosure
      {...forwardedProps}
      id={ctx.getPanelId(value)}
      ref={ref}
      role="region"
      isOpen={ctx.isValueActive(value)}
      className={clsx('v2-accordion-panel', classNames, className)}
      aria-labelledby={ctx.getTargetId(value)}
      data-accordion-panel
    >
      {children}
    </Disclosure>
  );
});

AccordionPanel.displayName = '@v2/Accordion.Panel';
export { AccordionPanel };
