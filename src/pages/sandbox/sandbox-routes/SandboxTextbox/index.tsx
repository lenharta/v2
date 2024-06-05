import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTextboxRouteFactory = React.FC<{}> & {};

const SandboxTextbox: SandboxTextboxRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Textbox" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxTextbox.displayName = '@v2/Sandbox.Textbox.Route';
export { SandboxTextbox };
