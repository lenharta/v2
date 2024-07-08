import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsAccordionProps = {};

type ElementsAccordionFactory = React.FC<ElementsAccordionProps> & {};

const ElementsAccordion: ElementsAccordionFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Accordion</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsAccordion.displayName = '@v2/Elements.Accordion';
export { ElementsAccordion };
