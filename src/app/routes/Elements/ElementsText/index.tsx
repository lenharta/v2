import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsTextProps = {};

type ElementsTextFactory = React.FC<ElementsTextProps> & {};

const ElementsText: ElementsTextFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Text</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsText.displayName = '@v2/Elements.Text';
export { ElementsText };
