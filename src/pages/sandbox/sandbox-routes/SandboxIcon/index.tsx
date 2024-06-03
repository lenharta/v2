import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxIconRouteFactory = React.FC<{}> & {};

const SandboxIcon: SandboxIconRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Icon</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxIcon.displayName = '@v2/Sandbox.Icon.Route';
export { SandboxIcon };
