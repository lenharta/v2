import * as React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const HomeHero = () => (
  <Hero>
    <Title className="v2-home-title" h1>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  </Hero>
);

const HomeOverview = () => (
  <Section>
    <Title>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const HomeRoute: React.FC<{}> = ({}) => (
  <Page>
    <HomeHero />
    <HomeOverview />
  </Page>
);

HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
