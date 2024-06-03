import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxVisuallyHiddenRouteFactory = React.FC<{}> & {};

const SandboxVisuallyHidden: SandboxVisuallyHiddenRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | VisuallyHidden</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxVisuallyHidden.displayName = '@v2/Sandbox.VisuallyHidden.Route';
export { SandboxVisuallyHidden };
