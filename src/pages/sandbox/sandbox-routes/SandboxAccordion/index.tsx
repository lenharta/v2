import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxAccordionRouteFactory = React.FC<{}> & {};

const SandboxAccordion: SandboxAccordionRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Accordion</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxAccordion.displayName = '@v2/Sandbox.Accordion.Route';
export { SandboxAccordion };
