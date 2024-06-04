import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTabsRouteFactory = React.FC<{}> & {};

const SandboxTabs: SandboxTabsRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Tabs" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxTabs.displayName = '@v2/Sandbox.Tabs.Route';
export { SandboxTabs };
