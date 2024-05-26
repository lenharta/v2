import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { AccordionItemProps } from '../Accordion.types';
import { useAccordionContext } from '../Accordion.context';
import { AccordionItemProvider } from '../AccordionItem.context';

type AccordionItemFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionItemProps;
}>;

const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { value, className, ...forwardedProps } = props;

  const ctx = useAccordionContext();

  const classNames = {
    ['v2-accordion-item--elevated']: ctx.elevated,
  };

  return (
    <AccordionItemProvider value={{ value }}>
      <div
        {...forwardedProps}
        {...(ctx.chevronRotation ? { 'data-active': ctx.isValueActive(value) } : {})}
        className={clsx('v2-accordion-item', classNames, className)}
        ref={ref}
      />
    </AccordionItemProvider>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem };
