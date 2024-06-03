import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxTitleRouteFactory = React.FC<{}> & {};

const SandboxTitle: SandboxTitleRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Title</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxTitle.displayName = '@v2/Sandbox.Title.Route';
export { SandboxTitle };
