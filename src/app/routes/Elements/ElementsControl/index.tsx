import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsControlProps = {};

type ElementsControlFactory = React.FC<ElementsControlProps> & {};

const ElementsControl: ElementsControlFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Control</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsControl.displayName = '@v2/Elements.Control';
export { ElementsControl };
