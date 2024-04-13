import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type ProjectsRouteComponent = React.FC<{}>;

export const Projects: ProjectsRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Projects</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
    </Page>
  );
};

Projects.displayName = '@v2/app/Route.Projects';
