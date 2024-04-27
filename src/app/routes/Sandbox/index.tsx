import * as React from 'react';
import { Page } from '@/app/common';

type SandboxRouteComponent = React.FC<{}>;

export const Sandbox: SandboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Sandbox" />
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Sandbox.displayName = '@v2/app/Route.Sandbox';
