import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsStackProps = {};

type ElementsStackFactory = React.FC<ElementsStackProps> & {};

const ElementsStack: ElementsStackFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Stack</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsStack.displayName = '@v2/Elements.Stack';
export { ElementsStack };
