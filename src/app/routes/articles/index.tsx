import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/app';

const ArticlesHero = () => (
  <Hero>
    <Title h1>Articles</Title>
  </Hero>
);

const ArticlesOverview = () => (
  <Section>
    <Title h2>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

const ArticlesRoute: React.FC<{}> = ({}) => (
  <Page>
    <ArticlesHero />
    <ArticlesOverview />
  </Page>
);

ArticlesRoute.displayName = '@v2/Route.Articles';
export { ArticlesRoute };
