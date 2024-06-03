import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxUnstyledRouteFactory = React.FC<{}> & {};

const SandboxUnstyled: SandboxUnstyledRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Unstyled</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxUnstyled.displayName = '@v2/Sandbox.Unstyled.Route';
export { SandboxUnstyled };
