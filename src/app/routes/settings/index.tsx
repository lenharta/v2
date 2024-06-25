import React from 'react';
import { Text, Title } from '@/core';
import { Hero, Page, Section } from '@/app';

const SettingsHero = () => (
  <Hero>
    <Title h1>Settings</Title>
  </Hero>
);

const SettingsOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const SettingsRoute: React.FC<{}> = ({}) => (
  <Page>
    <SettingsHero />
    <SettingsOverview />
  </Page>
);

SettingsRoute.displayName = '@v2/Route.Settings';
export { SettingsRoute };
