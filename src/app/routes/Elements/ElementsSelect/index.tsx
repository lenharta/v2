import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';

type ElementsSelectProps = {};

type ElementsSelectFactory = React.FC<ElementsSelectProps> & {};

const ElementsSelect: ElementsSelectFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements | Select</Title>
      </Page.Hero>
      <span>Viewer</span>
    </React.Fragment>
  );
};

ElementsSelect.displayName = '@v2/Elements.Select';
export { ElementsSelect };
