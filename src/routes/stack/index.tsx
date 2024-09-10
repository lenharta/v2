import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export type StackRouteProps = PageProps & {};

export type StackRouteComponent = {
  (props: StackRouteProps): React.ReactNode;
  displayName?: string;
};

export const Stack: StackRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Stack</Title>
      </Hero>
      <Main>
        <Section>
          <Text>
            This page is currently under contruction, check back later for updates. Click here to{' '}
            {homeLink}
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Stack.displayName = '@v2/Route.Stack';
