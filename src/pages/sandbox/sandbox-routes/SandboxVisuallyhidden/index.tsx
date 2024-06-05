import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxVisuallyHiddenRouteFactory = React.FC<{}> & {};

const SandboxVisuallyHidden: SandboxVisuallyHiddenRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | VisuallyHidden" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxVisuallyHidden.displayName = '@v2/Sandbox.VisuallyHidden.Route';
export { SandboxVisuallyHidden };
