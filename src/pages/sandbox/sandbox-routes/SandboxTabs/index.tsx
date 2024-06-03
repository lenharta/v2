import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTabsRouteFactory = React.FC<{}> & {};

const SandboxTabs: SandboxTabsRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Tabs</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxTabs.displayName = '@v2/Sandbox.Tabs.Route';
export { SandboxTabs };
