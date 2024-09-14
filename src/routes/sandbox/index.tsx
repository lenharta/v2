import * as React from 'react';
import { Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';
import { SandboxCanvas } from './sandbox-canvas';

export type SandboxRouteProps = PageProps & {};

export type SandboxRouteComponent = {
  (props: SandboxRouteProps): React.ReactNode;
  displayName?: string;
  Canvas: typeof SandboxCanvas;
};

export const Sandbox: SandboxRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Sandbox</Title>
      </Hero>
      <Main>
        <Sandbox.Canvas />
      </Main>
    </Page>
  );
};

Sandbox.Canvas = SandboxCanvas;
Sandbox.displayName = '@v2/Route.Sandbox';
