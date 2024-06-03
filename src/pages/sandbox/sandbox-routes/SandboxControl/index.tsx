import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxControlRouteFactory = React.FC<{}> & {};

const SandboxControl: SandboxControlRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Control</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxControl.displayName = '@v2/Sandbox.Control.Route';
export { SandboxControl };
