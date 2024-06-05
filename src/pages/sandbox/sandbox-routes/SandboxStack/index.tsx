import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxStackRouteFactory = React.FC<{}> & {};

const SandboxStack: SandboxStackRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Stack" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxStack.displayName = '@v2/Sandbox.Stack.Route';
export { SandboxStack };
