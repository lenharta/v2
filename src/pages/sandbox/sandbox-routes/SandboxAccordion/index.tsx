import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxAccordionRouteFactory = React.FC<{}> & {};

const SandboxAccordion: SandboxAccordionRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Accordion" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxAccordion.displayName = '@v2/Sandbox.Accordion.Route';
export { SandboxAccordion };
