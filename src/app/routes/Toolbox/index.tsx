import React from 'react';
import { Page } from '@/app/common';
import { TechTable } from './TechTable';

type ToolboxRouteComponent = React.FC<{}>;

export const Toolbox: ToolboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <TechTable />
      </Page.Content>
    </Page>
  );
};

Toolbox.displayName = '@v2/app/Route.Toolbox';
