import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTextboxRouteFactory = React.FC<{}> & {};

const SandboxTextbox: SandboxTextboxRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Textbox</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxTextbox.displayName = '@v2/Sandbox.Textbox.Route';
export { SandboxTextbox };
