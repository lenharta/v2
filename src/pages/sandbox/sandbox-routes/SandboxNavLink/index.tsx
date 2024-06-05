import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxNavLinkRouteFactory = React.FC<{}> & {};

const SandboxNavLink: SandboxNavLinkRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | NavLink" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxNavLink.displayName = '@v2/Sandbox.NavLink.Route';
export { SandboxNavLink };
