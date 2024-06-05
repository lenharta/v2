import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxControlRouteFactory = React.FC<{}> & {};

const SandboxControl: SandboxControlRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Control" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxControl.displayName = '@v2/Sandbox.Control.Route';
export { SandboxControl };
