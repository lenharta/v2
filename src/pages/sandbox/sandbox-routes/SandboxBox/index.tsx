import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxBoxRouteFactory = React.FC<{}> & {};

const SandboxBox: SandboxBoxRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Box" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxBox.displayName = '@v2/Sandbox.Box.Route';
export { SandboxBox };
