import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { AccordionItemProps } from '../types';
import { AccordionItemProvider, useAccordionContext } from '../context';

type AccordionItemFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionItemProps;
}>;

const AccordionItem = createFactory<AccordionItemFactory>((props, ref) => {
  const { value, children, className, ...forwardedProps } = props;

  const ctx = useAccordionContext();

  const optionalProps = {
    ...(ctx.chevronRotation ? { 'data-active': ctx.isValueActive(value) } : {}),
  };

  return (
    <div
      ref={ref}
      className={clsx('v2-accordion-item', className)}
      {...optionalProps}
      {...forwardedProps}
    >
      <AccordionItemProvider value={{ value }}>{children}</AccordionItemProvider>
    </div>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem };
