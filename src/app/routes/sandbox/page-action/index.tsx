import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/app';

const SandboxActionHero = () => (
  <Hero>
    <Title h1>Sandbox | Action</Title>
  </Hero>
);

const SandboxActionOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio culpa molestiae
      vitae quis blanditiis itaque facilis. Fugit reiciendis delectus illo assumenda a beatae. Eos
      ullam pariatur tempore eligendi corrupti?
    </Text>
  </Section>
);

const SandboxActionRoute: React.FC<{}> = ({}) => (
  <React.Fragment>
    <SandboxActionHero />
    <SandboxActionOverview />
  </React.Fragment>
);

SandboxActionRoute.displayName = '@v2/Route.Sandbox.Action';
export { SandboxActionRoute };
