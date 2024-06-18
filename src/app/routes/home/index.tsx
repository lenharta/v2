import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

import { HomeTitle } from './home-title';

const HomeRoute: React.FC<{}> & { Title: typeof HomeTitle } = () => (
  <Page>
    <Hero title={<HomeRoute.Title />} />
    <Section>
      <Title>Section</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
        nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
        reiciendis fugiat, ut tenetur.
      </Text>
    </Section>
  </Page>
);

HomeRoute.Title = HomeTitle;
HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
