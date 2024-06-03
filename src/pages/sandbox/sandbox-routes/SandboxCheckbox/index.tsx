import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxCheckboxRouteFactory = React.FC<{}> & {};

const SandboxCheckbox: SandboxCheckboxRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Checkbox</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxCheckbox.displayName = '@v2/Sandbox.Checkbox.Route';
export { SandboxCheckbox };
