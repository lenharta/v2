import { Core } from '@/types';
import { createSafeContext } from '@/utils';

export const [AccordionRootProvider, useAccordionRootCTX] =
  createSafeContext<Core.AccordionContext>(
    '[@v2/core/AccordionContext]: could not locate component in context tree'
  );

export const [AccordionItemProvider, useAccordionItemCTX] =
  createSafeContext<Core.AccordionItemContext>(
    '[@v2/core/AccordionItemContext]: could not locate component in context tree'
  );
