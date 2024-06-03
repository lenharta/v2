import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxBoxRouteFactory = React.FC<{}> & {};

const SandboxBox: SandboxBoxRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Box</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxBox.displayName = '@v2/Sandbox.Box.Route';
export { SandboxBox };
