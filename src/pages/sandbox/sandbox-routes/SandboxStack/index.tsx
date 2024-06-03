import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxStackRouteFactory = React.FC<{}> & {};

const SandboxStack: SandboxStackRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Stack</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxStack.displayName = '@v2/Sandbox.Stack.Route';
export { SandboxStack };
