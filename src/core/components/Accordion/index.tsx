import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components/Box';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

import { AccordionProvider } from './context';
import { AccordionTarget } from './Target';
import { AccordionPanel } from './Panel';
import { AccordionItem } from './Item';

interface AccordionProps {
  value: string[];
  onChange: (value: string[]) => void;
}

type AccordionFactory = Factory.Config<{
  ref: HTMLUListElement;
  comp: 'ul';
  props: AccordionProps;
  comps: {
    Target: typeof AccordionTarget;
    Panel: typeof AccordionPanel;
    Item: typeof AccordionItem;
  };
}>;

const Accordion = factory<AccordionFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      data-orientation="vertical"
      aria-orientation="vertical"
      className={clsx('v2-accordion', className)}
      component="ul"
      ref={ref}
    >
      <AccordionProvider value={{}}>
        <React.Fragment>{children}</React.Fragment>
      </AccordionProvider>
    </Box>
  );
});

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
export { Accordion, type AccordionProps };
