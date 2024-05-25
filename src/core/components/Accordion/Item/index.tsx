import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { AccordionItemProps } from '../Accordion.types';

type AccordionItemFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionItemProps;
}>;

const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { className, children, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      data-accordion-item
      className={clsx('v2-accordion-item', className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem };
