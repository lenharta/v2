import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const CanvasHero = () => (
  <Hero>
    <Title h1>Canvas</Title>
  </Hero>
);

const CanvasOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const CanvasRoute: React.FC<{}> = ({}) => (
  <Page>
    <CanvasHero />
    <CanvasOverview />
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };
