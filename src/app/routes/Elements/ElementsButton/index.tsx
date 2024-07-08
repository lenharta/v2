import * as React from 'react';
import { Title } from '@/core';
import { Page } from '@/app';

type ElementsButtonProps = {};

type ElementsButtonFactory = React.FC<ElementsButtonProps> & {};

const ElementsButton: ElementsButtonFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Button</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsButton.displayName = '@v2/Elements.Button';
export { ElementsButton };
