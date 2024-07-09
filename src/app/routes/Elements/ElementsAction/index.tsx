import * as React from 'react';
import { Title } from '@/core';
import { Page } from '@/app';

type ElementsActionProps = {};

type ElementsActionFactory = React.FC<ElementsActionProps> & {};

const ElementsAction: ElementsActionFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>
          Elements | <span className="accent">Action</span>
        </Title>
      </Page.Hero>
    </React.Fragment>
  );
};

ElementsAction.displayName = '@v2/Elements.Action';
export { ElementsAction };
