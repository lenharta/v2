import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsGroupProps = {};

type ElementsGroupFactory = React.FC<ElementsGroupProps> & {};

const ElementsGroup: ElementsGroupFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Group</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsGroup.displayName = '@v2/Elements.Group';
export { ElementsGroup };
