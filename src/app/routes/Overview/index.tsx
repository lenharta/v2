import * as React from 'react';
import { Page } from '@/app';
import { OverviewHero } from './OverviewHero';
import { OverviewIntro } from './OverviewIntro';

type OverviewFactory = React.FC<{}> & {
  Hero: typeof OverviewHero;
  Intro: typeof OverviewIntro;
};

const Overview: OverviewFactory = ({}) => (
  <Page>
    <Overview.Hero />
    <Overview.Intro />
  </Page>
);

Overview.Hero = OverviewHero;
Overview.Intro = OverviewIntro;
Overview.displayName = '@v2/Overview.';
export { Overview };
