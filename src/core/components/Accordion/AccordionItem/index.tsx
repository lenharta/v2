import clsx from 'clsx';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

import { AccordionItemProps, AccordionItemCSS } from '../types';
import { useAccordionContext, AccordionItemProvider } from '../Accordion.context';

type AccordionItemFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: AccordionItemProps;
}>;

const css: AccordionItemCSS = {
  root: 'v2-accordion-item-root',
};

const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { value, className, ...forwardedProps } = props;

  const ctx = useAccordionContext();

  return (
    <AccordionItemProvider value={{ value }}>
      <Box
        {...forwardedProps}
        {...(ctx.chevronRotation ? { 'data-active': ctx.isValueActive(value) } : {})}
        className={clsx(css.root, className)}
        ref={ref}
      />
    </AccordionItemProvider>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem };
