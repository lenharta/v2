import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type ToolboxRouteComponent = React.FC<{}>;

export const Toolbox: ToolboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Toolbox</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Toolbox.displayName = '@v2/app/Route.Toolbox';
