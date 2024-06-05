import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxTitleRouteFactory = React.FC<{}> & {};

const SandboxTitle: SandboxTitleRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Title" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxTitle.displayName = '@v2/Sandbox.Title.Route';
export { SandboxTitle };
