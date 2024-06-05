import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxUnstyledRouteFactory = React.FC<{}> & {};

const SandboxUnstyled: SandboxUnstyledRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Unstyled" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxUnstyled.displayName = '@v2/Sandbox.Unstyled.Route';
export { SandboxUnstyled };
