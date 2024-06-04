import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxDisclosureRouteFactory = React.FC<{}> & {};

const SandboxDisclosure: SandboxDisclosureRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Disclosure" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxDisclosure.displayName = '@v2/Sandbox.Disclosure.Route';
export { SandboxDisclosure };
