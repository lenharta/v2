import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxLabelRouteFactory = React.FC<{}> & {};

const SandboxLabel: SandboxLabelRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Label</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxLabel.displayName = '@v2/Sandbox.Label.Route';
export { SandboxLabel };
