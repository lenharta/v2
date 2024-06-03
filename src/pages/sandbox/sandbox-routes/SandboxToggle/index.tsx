import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxToggleRouteFactory = React.FC<{}> & {};

const SandboxToggle: SandboxToggleRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Toggle</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxToggle.displayName = '@v2/Sandbox.Toggle.Route';
export { SandboxToggle };
