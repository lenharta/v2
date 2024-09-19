import { Page } from '@/app';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { ProjectsThunkworks } from './pages/projects-thunkworks';
import { ProjectsTabIndex } from './pages/projects-tabindex';
import { ProjectsV1 } from './pages/projects-v1';

type ProjectsRouteComponent = React.FC<{}> & {
  Thunkworks: typeof ProjectsThunkworks;
  TabIndex: typeof ProjectsTabIndex;
  V1: typeof ProjectsV1;
};

export const Projects: ProjectsRouteComponent = ({}) => {
  return (
    <Page>
      <Router.Outlet />
    </Page>
  );
};

Projects.V1 = ProjectsV1;
Projects.TabIndex = ProjectsTabIndex;
Projects.Thunkworks = ProjectsThunkworks;
Projects.displayName = '@v2/Route.Projects';
