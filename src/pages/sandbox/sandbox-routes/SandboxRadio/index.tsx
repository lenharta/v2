import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxRadioRouteFactory = React.FC<{}> & {};

const SandboxRadio: SandboxRadioRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Radio</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxRadio.displayName = '@v2/Sandbox.Radio.Route';
export { SandboxRadio };
