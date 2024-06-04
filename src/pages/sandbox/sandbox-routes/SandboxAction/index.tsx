import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxActionRouteFactory = React.FC<{}> & {};

const SandboxAction: SandboxActionRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Action" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxAction.displayName = '@v2/Sandbox.Action.Route';
export { SandboxAction };
