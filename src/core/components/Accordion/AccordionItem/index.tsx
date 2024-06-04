import clsx from 'clsx';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

import { AccordionItemProps, AccordionCSS } from '../types';
import { useAccordionContext, AccordionItemProvider } from '../Accordion.context';

type AccordionItemFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionItemProps;
}>;

const css: Partial<AccordionCSS> = {
  item: 'v2-accordion-item',
};

const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { value, className, ...forwardedProps } = props;

  const ctx = useAccordionContext();

  return (
    <AccordionItemProvider value={{ value }}>
      <Box
        {...forwardedProps}
        ref={ref}
        className={clsx(css.item, className)}
        {...(ctx.chevronRotation ? { 'data-active': ctx.isValueActive(value) } : {})}
      />
    </AccordionItemProvider>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem };
