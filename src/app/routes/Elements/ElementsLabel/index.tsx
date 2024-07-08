import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsLabelProps = {};

type ElementsLabelFactory = React.FC<ElementsLabelProps> & {};

const ElementsLabel: ElementsLabelFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Label</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsLabel.displayName = '@v2/Elements.Label';
export { ElementsLabel };
