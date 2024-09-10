import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export type ContactRouteProps = PageProps & {};

export type ContactRouteComponent = {
  (props: ContactRouteProps): React.ReactNode;
  displayName?: string;
};

export const Contact: ContactRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Contact</Title>
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

Contact.displayName = '@v2/Route.Contact';
