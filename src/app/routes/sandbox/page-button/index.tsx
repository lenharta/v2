import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Main, Section } from '@/app';

const SandboxButtonHero = () => (
  <Hero>
    <Title h1>Sandbox | Button</Title>
  </Hero>
);

const SandboxButtonOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio culpa molestiae
      vitae quis blanditiis itaque facilis. Fugit reiciendis delectus illo assumenda a beatae. Eos
      ullam pariatur tempore eligendi corrupti?
    </Text>
  </Section>
);

const SandboxButtonRoute: React.FC<{}> = ({}) => (
  <React.Fragment>
    <SandboxButtonHero />
    <Main>
      <SandboxButtonOverview />
    </Main>
  </React.Fragment>
);

SandboxButtonRoute.displayName = '@v2/Route.Sandbox.Button';
export { SandboxButtonRoute };
