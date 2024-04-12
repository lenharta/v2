import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type DemoRouteComponent = React.FC<{}>;

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
