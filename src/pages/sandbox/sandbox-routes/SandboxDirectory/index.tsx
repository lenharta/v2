import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxDirectoryRouteFactory = React.FC<{}> & {};

const SandboxDirectory: SandboxDirectoryRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxDirectory.displayName = '@v2/Sandbox.Directory.Route';
export { SandboxDirectory };
