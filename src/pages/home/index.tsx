import React from 'react';
import { Stack, Text } from '@/core';
import { Hero, Page, Section } from '@/common';
import { HomeError } from './HomeError';
import { HomeTitle } from './HomeTitle';

type HomeRouteFactory = React.FC<{}> & {
  Error: typeof HomeError;
};

const Home: HomeRouteFactory = ({}) => {
  return (
    <Page>
      <Hero title={<HomeTitle />} />
      <Section>
        <Text>Home</Text>
      </Section>
    </Page>
  );
};

Home.Error = HomeError;
Home.displayName = '@v2/Home.Route';
export { Home };
