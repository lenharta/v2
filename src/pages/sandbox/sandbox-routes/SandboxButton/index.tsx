import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxButtonRouteFactory = React.FC<{}> & {};

const SandboxButton: SandboxButtonRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Button" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxButton.displayName = '@v2/Sandbox.Button.Route';
export { SandboxButton };
