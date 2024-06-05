import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxDividerRouteFactory = React.FC<{}> & {};

const SandboxDivider: SandboxDividerRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Divider" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxDivider.displayName = '@v2/Sandbox.Divider.Route';
export { SandboxDivider };
