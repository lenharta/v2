import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ExperienceHero = () => (
  <Hero>
    <Title h1>Experience</Title>
  </Hero>
);

const ExperienceOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const ExperienceRoute: React.FC<{}> = ({}) => (
  <Page>
    <ExperienceHero />
    <ExperienceOverview />
  </Page>
);

ExperienceRoute.displayName = '@v2/Route.Experience';
export { ExperienceRoute };
