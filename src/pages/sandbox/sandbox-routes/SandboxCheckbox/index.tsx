import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxCheckboxRouteFactory = React.FC<{}> & {};

const SandboxCheckbox: SandboxCheckboxRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Checkbox" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxCheckbox.displayName = '@v2/Sandbox.Checkbox.Route';
export { SandboxCheckbox };
