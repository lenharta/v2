import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';

export type ErrorRouteProps = PageProps & {};

export type ErrorRouteComponent = {
  (props: ErrorRouteProps): React.ReactNode;
  displayName?: string;
};

export const Error: ErrorRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Page Error: 404</Title>
      </Hero>
      <Main>
        <Text>We had trouble locating the page. Try refreshing the page -or- {homeLink}</Text>
      </Main>
    </Page>
  );
};

Error.displayName = '@v2/Route.Error';
