import React from 'react';
import { Title } from '@/core';
import { Hero, Main, Section } from '@/common';

type SandboxImageRouteFactory = React.FC<{}> & {};

const SandboxImage: SandboxImageRouteFactory = () => (
  <React.Fragment>
    <Hero title={<Title h1>Sandbox | Image</Title>} />
    <Main>
      <Section>
        <Title h2>Demo</Title>
      </Section>
    </Main>
  </React.Fragment>
);

SandboxImage.displayName = '@v2/Sandbox.Image.Route';
export { SandboxImage };
