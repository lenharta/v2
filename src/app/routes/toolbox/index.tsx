import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ToolboxHero = () => (
  <Hero>
    <Title h1>Toolbox</Title>
  </Hero>
);

const ToolboxOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const ToolboxRoute: React.FC<{}> = ({}) => (
  <Page>
    <ToolboxHero />
    <ToolboxOverview />
  </Page>
);

ToolboxRoute.displayName = '@v2/Route.Toolbox';
export { ToolboxRoute };
