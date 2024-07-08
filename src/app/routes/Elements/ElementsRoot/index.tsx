import * as React from 'react';
import { Page } from '@/app';
import { Title } from '@/core';
import { Gallery } from './GalleryRoot';

type ElementsRootProps = {};

type ElementsRootFactory = React.FC<ElementsRootProps> & {};

const ElementsRoot: ElementsRootFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Page.Hero>
        <Title h1>Elements</Title>
      </Page.Hero>
      <Gallery />
    </React.Fragment>
  );
};

ElementsRoot.displayName = '@v2/Elements.Root';
export { ElementsRoot };
