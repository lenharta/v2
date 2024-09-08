import * as React from 'react';
import { Main, Page, PageProps } from '@/app';
import { HomeHero } from './sections/home-hero';
import { HomeIntro } from './sections/home-intro';
import { HomeStats } from './sections/home-stats';
import { HomeBrands } from './sections/home-brands';
import { HomeExperience } from './sections/home-experience';

export type HomeRouteProps = PageProps & {};

export type HomeRouteComponent = {
  (props: HomeRouteProps): React.ReactNode;
  displayName?: string;
  Hero: typeof HomeHero;
  Intro: typeof HomeIntro;
  Stats: typeof HomeStats;
  Brands: typeof HomeBrands;
  Experience: typeof HomeExperience;
};

export const Home: HomeRouteComponent = (props) => (
  <Page {...props}>
    <Home.Hero />
    <Main>
      <Home.Intro />
      <Home.Stats />
      <Home.Brands />
      <Home.Experience />
    </Main>
  </Page>
);

Home.Hero = HomeHero;
Home.Intro = HomeIntro;
Home.Stats = HomeStats;
Home.Brands = HomeBrands;
Home.Experience = HomeExperience;
Home.displayName = '@v2/Route.Home';
