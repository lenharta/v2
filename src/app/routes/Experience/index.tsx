import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type ExperienceRouteComponent = React.FC<{}>;

export const Experience: ExperienceRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Experience</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Experience.displayName = '@v2/app/Route.Experience';
