import React from 'react';
import { Text } from '@/core';
import { HomeHero } from './HomeHero';
import { Page, Section } from '@/app/layouts';

export const Home: React.FC<{}> = ({}) => {
  return (
    <Page hero={<HomeHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Home.displayName = '@v2/route/Home';
