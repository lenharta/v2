import React from 'react';
import { HomeTitle } from './home-title';
import { Button, Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

function ButtonCanvas() {
  return (
    <React.Fragment>
      <Title>Canvas | Button</Title>
      <Button>Default</Button>
    </React.Fragment>
  );
}

const HomeRoute: React.FC<{}> & { Title: typeof HomeTitle } = () => (
  <Page>
    <Hero title={<HomeRoute.Title />} />
    <Section>
      <ButtonCanvas />
    </Section>
  </Page>
);

HomeRoute.Title = HomeTitle;
HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
