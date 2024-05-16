import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface AccordionItemProps {}

type AccordionItemFactory = Factory.Config<{
  ref: HTMLLIElement;
  comp: 'li';
  props: AccordionItemProps;
}>;

const AccordionItem = factory<AccordionItemFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Box component="li" {...forwardedProps} className={clsx('v2-accordion-item')} ref={ref}>
      {children}
    </Box>
  );
});

AccordionItem.displayName = '@v2/Accordion.Item';
export { AccordionItem, type AccordionItemProps };
