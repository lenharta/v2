import * as React from 'react';
import { Page } from '@/app/common';
import { HomeHero } from './HomeHero';
import { HomeOverview } from './HomeOverview';

type HomeRouteComponent = React.FC<{}>;

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
