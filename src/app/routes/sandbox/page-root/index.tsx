import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Section } from '@/app';

const SandboxRootHero = () => (
  <Hero>
    <Title h1>Sandbox</Title>
  </Hero>
);

const SandboxRootOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio culpa molestiae
      vitae quis blanditiis itaque facilis. Fugit reiciendis delectus illo assumenda a beatae. Eos
      ullam pariatur tempore eligendi corrupti?
    </Text>
  </Section>
);

const SandboxRootRoute: React.FC<{}> = ({}) => (
  <React.Fragment>
    <SandboxRootHero />
    <SandboxRootOverview />
  </React.Fragment>
);

SandboxRootRoute.displayName = '@v2/Route.Sandbox.Root';
export { SandboxRootRoute };
