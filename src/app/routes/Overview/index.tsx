import * as React from 'react';
import { Page } from '@/app';
import { OverviewHero } from './OverviewHero';
import { OverviewIntro } from './OverviewIntro';
import { OverviewStats } from './OverviewStats';
import { OverviewResume } from './OverviewResume';

type OverviewFactory = React.FC<{}> & {
  Hero: typeof OverviewHero;
  Intro: typeof OverviewIntro;
  Stats: typeof OverviewStats;
  Resume: typeof OverviewResume;
};

const Overview: OverviewFactory = ({}) => (
  <Page>
    <Overview.Hero />
    <Overview.Intro />
    <Overview.Stats />
    <Overview.Resume />
  </Page>
);

Overview.Hero = OverviewHero;
Overview.Intro = OverviewIntro;
Overview.Stats = OverviewStats;
Overview.Resume = OverviewResume;
Overview.displayName = '@v2/Overview';
export { Overview };
