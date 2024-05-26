import { AccordionContext } from './Accordion.types';
import { createSafeContext } from '@/core/utils';

const [AccordionProvider, useAccordionContext] = createSafeContext<AccordionContext>(
  '[@v2/core/Accordion.context]: could not locate component in context tree'
);

export { AccordionProvider, useAccordionContext };
