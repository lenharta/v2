import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTransitionRouteFactory = React.FC<{}> & {};

const SandboxTransition: SandboxTransitionRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Transition</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxTransition.displayName = '@v2/Sandbox.Transition.Route';
export { SandboxTransition };
