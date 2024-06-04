import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxLabelRouteFactory = React.FC<{}> & {};

const SandboxLabel: SandboxLabelRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Label" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxLabel.displayName = '@v2/Sandbox.Label.Route';
export { SandboxLabel };
