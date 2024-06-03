import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTextRouteFactory = React.FC<{}> & {};

const SandboxText: SandboxTextRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Text</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxText.displayName = '@v2/Sandbox.Text.Route';
export { SandboxText };
