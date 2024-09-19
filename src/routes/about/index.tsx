import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export const About: React.FC<PageProps & {}> = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title h1>About</Title>
      </Hero>
      <Main>
        <Section>
          <Text className="v2-construction-message">
            This page is currently under contruction, check back later for updates. Click here to{' '}
            {homeLink}
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

About.displayName = '@v2/Route.About';
