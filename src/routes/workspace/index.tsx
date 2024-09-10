import * as React from 'react';
import * as Router from 'react-router-dom';
import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export type WorkspaceRouteProps = PageProps & {};

export type WorkspaceRouteComponent = {
  (props: WorkspaceRouteProps): React.ReactNode;
  displayName?: string;
};

export const Workspace: WorkspaceRouteComponent = (props) => {
  const homeLink = <Router.Link to="/">go home.</Router.Link>;
  return (
    <Page {...props}>
      <Hero>
        <Title>Workspace</Title>
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

Workspace.displayName = '@v2/Route.Workspace';
