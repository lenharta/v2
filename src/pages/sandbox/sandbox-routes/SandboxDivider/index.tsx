import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxDividerRouteFactory = React.FC<{}> & {};

const SandboxDivider: SandboxDividerRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Divider</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxDivider.displayName = '@v2/Sandbox.Divider.Route';
export { SandboxDivider };
