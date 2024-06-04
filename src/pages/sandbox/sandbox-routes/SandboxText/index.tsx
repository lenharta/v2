import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTextRouteFactory = React.FC<{}> & {};

const SandboxText: SandboxTextRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Text" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxText.displayName = '@v2/Sandbox.Text.Route';
export { SandboxText };
