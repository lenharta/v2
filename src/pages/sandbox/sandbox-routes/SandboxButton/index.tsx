import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxButtonRouteFactory = React.FC<{}> & {};

const SandboxButton: SandboxButtonRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Button</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxButton.displayName = '@v2/Sandbox.Button.Route';
export { SandboxButton };
