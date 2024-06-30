import { createSafeContext } from '@/utils';
import { AccordionContext, AccordionItemContext } from './types';

const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  '[@v2/core/Accordion.context]: could not locate component in context tree'
);

const [AccordionItemProvider, useAccordionItemContext] = createSafeContext<AccordionItemContext>(
  '[@v2/core/AccordionItem.context]: could not locate component in context tree'
);

export { AccordionProvider, useAccordionContext, AccordionItemProvider, useAccordionItemContext };
