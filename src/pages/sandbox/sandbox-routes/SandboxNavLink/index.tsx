import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxNavLinkRouteFactory = React.FC<{}> & {};

const SandboxNavLink: SandboxNavLinkRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | NavLink</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxNavLink.displayName = '@v2/Sandbox.NavLink.Route';
export { SandboxNavLink };
