import React from 'react';
import { AccordionItem } from './Item';
import { AccordionPanel } from './Panel';
import { AccordionTarget } from './Target';
import { AccordionProvider } from './Accordion.context';
import { AccordionRootProps } from './Accordion.types';

type AccordionFactory = React.FC<AccordionRootProps> & {
  Item: typeof AccordionItem;
  Panel: typeof AccordionPanel;
  Target: typeof AccordionTarget;
};

const Accordion: AccordionFactory = (props) => {
  const { children } = props;
  return (
    <AccordionProvider value={{}}>
      <React.Fragment>{children}</React.Fragment>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
export { Accordion };
