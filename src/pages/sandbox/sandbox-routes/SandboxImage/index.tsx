import React from 'react';
import { Title } from '@/core';
import { Hero, Section } from '@/common';

type SandboxImageRouteFactory = React.FC<{}> & {};

const SandboxImage: SandboxImageRouteFactory = () => (
  <React.Fragment>
    <Hero title="Sandbox | Image" />
    <Section>
      <Title h2>Demo</Title>
    </Section>
  </React.Fragment>
);

SandboxImage.displayName = '@v2/Sandbox.Image.Route';
export { SandboxImage };
