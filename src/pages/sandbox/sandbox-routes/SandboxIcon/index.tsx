import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxIconRouteFactory = React.FC<{}> & {};

const SandboxIcon: SandboxIconRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Icon" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxIcon.displayName = '@v2/Sandbox.Icon.Route';
export { SandboxIcon };
