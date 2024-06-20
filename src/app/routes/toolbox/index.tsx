import React from 'react';
import { Page, Hero } from '@/common';
import { TechTable } from './TechTable';

const ToolboxRoute: React.FC<{}> = () => (
  <Page>
    <Hero title="Toolbox" />
    <TechTable />
  </Page>
);

ToolboxRoute.displayName = '@v2/Route.Toolbox';
export { ToolboxRoute };
