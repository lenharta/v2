import * as React from 'react';
import { Headline, Main, Page, PageProps } from '@/app';
import { HomeHero } from './sections/home-hero';
import { HomeIntro } from './sections/home-intro';
import { HomeResume } from './sections/home-resume';
import { HomeBrands } from './sections/home-brands';

export type HomeRouteProps = PageProps & {};

export type HomeRouteComponent = React.FC<HomeRouteProps> & {
  Hero: typeof HomeHero;
  Intro: typeof HomeIntro;
  Resume: typeof HomeResume;
  Brands: typeof HomeBrands;
};

export const Home: HomeRouteComponent = (props) => (
  <Page {...props}>
    <Home.Hero />
    <Main>
      <Headline title="Intro" href="home-intro" order=".01" />
      <Home.Intro />
      <Headline title="Resume" href="home-resume" order=".02" />
      <Home.Resume />
      <Headline title="Brands" href="home-brands" order=".03" />
      <Home.Brands />
    </Main>
  </Page>
);

Home.Hero = HomeHero;
Home.Intro = HomeIntro;
Home.Resume = HomeResume;
Home.Brands = HomeBrands;
Home.displayName = '@v2/Route.Home';
