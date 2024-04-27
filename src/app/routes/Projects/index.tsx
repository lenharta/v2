import * as React from 'react';
import { Page } from '@/app/common';

type ProjectsRouteComponent = React.FC<{}>;

export const Projects: ProjectsRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Projects" />
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Projects.displayName = '@v2/app/Route.Projects';
