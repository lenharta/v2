import * as React from 'react';
import { Page } from '@app/components';
import { OverviewHero } from './OverviewHero';
import { OverviewIntro } from './OverviewIntro';
import { OverviewStats } from './OverviewStats';
import { OverviewBrands } from './OverviewBrands';
import { OverviewExperience } from './OverviewExperience';

type OverviewFactory = React.FC<{}> & {
  Hero: typeof OverviewHero;
  Intro: typeof OverviewIntro;
  Stats: typeof OverviewStats;
  Brands: typeof OverviewBrands;
  Experience: typeof OverviewExperience;
};

const Overview: OverviewFactory = ({}) => (
  <Page>
    <Overview.Hero />
    <Overview.Intro />
    <Overview.Stats />
    <Overview.Brands />
    <Overview.Experience />
  </Page>
);

Overview.Hero = OverviewHero;
Overview.Intro = OverviewIntro;
Overview.Stats = OverviewStats;
Overview.Brands = OverviewBrands;
Overview.Experience = OverviewExperience;
Overview.displayName = '@v2/Overview';
export { Overview };
