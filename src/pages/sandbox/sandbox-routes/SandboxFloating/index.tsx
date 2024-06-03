import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxFloatingRouteFactory = React.FC<{}> & {};

const SandboxFloating: SandboxFloatingRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Floating</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxFloating.displayName = '@v2/Sandbox.Floating.Route';
export { SandboxFloating };
