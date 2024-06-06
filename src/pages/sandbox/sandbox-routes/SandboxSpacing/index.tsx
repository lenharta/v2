import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxSpacingRouteFactory = React.FC<{}> & {};

const SandboxSpacing: SandboxSpacingRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Spacing" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxSpacing.displayName = '@v2/Sandbox.Spacing.Route';
export { SandboxSpacing };
