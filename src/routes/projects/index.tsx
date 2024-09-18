import { Page } from '@/app';
import * as React from 'react';
import * as Router from 'react-router-dom';

export const Projects: React.FC<{}> = ({}) => {
  return (
    <Page>
      <Router.Outlet />
    </Page>
  );
};

Projects.displayName = '@v2/Route.Projects';
