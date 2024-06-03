import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxDisclosureRouteFactory = React.FC<{}> & {};

const SandboxDisclosure: SandboxDisclosureRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Disclosure</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxDisclosure.displayName = '@v2/Sandbox.Disclosure.Route';
export { SandboxDisclosure };
