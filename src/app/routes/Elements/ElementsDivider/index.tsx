import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsDividerProps = {};

type ElementsDividerFactory = React.FC<ElementsDividerProps> & {};

const ElementsDivider: ElementsDividerFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Divider</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsDivider.displayName = '@v2/Elements.Divider';
export { ElementsDivider };
