import * as React from 'react';
import { Main, Page, PageProps } from '@/app';
import { HomeHero } from './sections/home-hero';
import { HomeStats } from './sections/home-stats';
import { HomeIntro } from './sections/home-intro';
import { HomeBrands } from './sections/home-brands';
import { HomeResume } from './sections/home-resume';

export type HomeRouteProps = PageProps & {};

export type HomeRouteComponent = {
  (props: HomeRouteProps): React.ReactNode;
  displayName?: string;
  Hero: typeof HomeHero;
  Stats: typeof HomeStats;
  Intro: typeof HomeIntro;
  Brands: typeof HomeBrands;
  Resume: typeof HomeResume;
};

export const Home: HomeRouteComponent = (props) => (
  <Page {...props}>
    <Home.Hero />
    <Main>
      <Home.Intro />
      <Home.Stats />
      <Home.Resume />
      <Home.Brands />
    </Main>
  </Page>
);

Home.Hero = HomeHero;
Home.Intro = HomeIntro;
Home.Stats = HomeStats;
Home.Brands = HomeBrands;
Home.Resume = HomeResume;
Home.displayName = '@v2/Route.Home';
