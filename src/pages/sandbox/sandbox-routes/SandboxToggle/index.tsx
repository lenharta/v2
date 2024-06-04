import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxToggleRouteFactory = React.FC<{}> & {};

const SandboxToggle: SandboxToggleRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Toggle" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxToggle.displayName = '@v2/Sandbox.Toggle.Route';
export { SandboxToggle };
