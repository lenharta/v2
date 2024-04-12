import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type SandboxRouteComponent = React.FC<{}>;

export const Sandbox: SandboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Sandbox</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Sandbox.displayName = '@v2/app/Route.Sandbox';
