import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxActionRouteFactory = React.FC<{}> & {};

const SandboxAction: SandboxActionRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Action</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxAction.displayName = '@v2/Sandbox.Action.Route';
export { SandboxAction };
