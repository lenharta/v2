import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsTitleProps = {};

type ElementsTitleFactory = React.FC<ElementsTitleProps> & {};

const ElementsTitle: ElementsTitleFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Title</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsTitle.displayName = '@v2/Elements.Title';
export { ElementsTitle };
