import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTransitionRouteFactory = React.FC<{}> & {};

const SandboxTransition: SandboxTransitionRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Transition" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxTransition.displayName = '@v2/Sandbox.Transition.Route';
export { SandboxTransition };
