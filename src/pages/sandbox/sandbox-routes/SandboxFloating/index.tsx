import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxFloatingRouteFactory = React.FC<{}> & {};

const SandboxFloating: SandboxFloatingRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Floating" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxFloating.displayName = '@v2/Sandbox.Floating.Route';
export { SandboxFloating };
