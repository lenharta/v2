import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxRadioRouteFactory = React.FC<{}> & {};

const SandboxRadio: SandboxRadioRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Radio" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxRadio.displayName = '@v2/Sandbox.Radio.Route';
export { SandboxRadio };
