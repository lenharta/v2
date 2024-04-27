import * as React from 'react';
import { Page } from '@/app/common';

type ExperienceRouteComponent = React.FC<{}>;

export const Experience: ExperienceRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Experience" />
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Experience.displayName = '@v2/app/Route.Experience';
