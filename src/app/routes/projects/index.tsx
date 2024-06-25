import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ProjectsHero = () => (
  <Hero>
    <Title h1>Projects</Title>
  </Hero>
);

const ProjectsOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const ProjectsRoute: React.FC<{}> = ({}) => (
  <Page>
    <ProjectsHero />
    <ProjectsOverview />
  </Page>
);

ProjectsRoute.displayName = '@v2/Route.Projects';
export { ProjectsRoute };
