import { createSafeContext } from '@/core/utils';
import { AccordionItemContext } from './Accordion.types';

const [AccordionItemProvider, useAccordionItemContext] = createSafeContext<AccordionItemContext>(
  '[@v2/core/AccordionItem.context]: could not locate component in context tree'
);

export { AccordionItemProvider, useAccordionItemContext };
