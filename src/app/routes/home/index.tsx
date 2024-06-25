import * as React from 'react';
import { Page } from '@/app';
import { HomeExperience, HomeHero, HomeOverview, HomeStats } from './sections';

type HomeRouteFactory = React.FC<{}> & {
  Hero: typeof HomeHero;
  Overview: typeof HomeOverview;
  Stats: typeof HomeStats;
  Experience: typeof HomeExperience;
};

const HomeRoute: HomeRouteFactory = ({}) => (
  <Page>
    <HomeRoute.Hero />
    <HomeRoute.Overview />
    <HomeRoute.Stats />
    <HomeRoute.Experience />
  </Page>
);

HomeRoute.Hero = HomeHero;
HomeRoute.Stats = HomeStats;
HomeRoute.Overview = HomeOverview;
HomeRoute.Experience = HomeExperience;
HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
