import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export type SandboxRouteProps = PageProps & {};

export type SandboxRouteComponent = {
  (props: SandboxRouteProps): React.ReactNode;
  displayName?: string;
};

export const Sandbox: SandboxRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Sandbox</Title>
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

Sandbox.displayName = '@v2/Route.Sandbox';
