import * as React from 'react';
import { Page } from '@/app/common';
import { HomeHero } from './HomeHero';

type HomeRouteComponent = React.FC<{}>;

const HomeIntroduction = () => {
  return (
    <section className="home-introduction">
      <div className="home-introduction-box">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus iste quod facere
        voluptatibus quos nisi repellat, consequuntur at laudantium animi veniam eius consequatur
        cum quisquam distinctio fugiat? Placeat, ad!
      </div>
      <div className="home-introduction-box">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus iste quod facere
        voluptatibus quos nisi repellat, consequuntur at laudantium animi veniam eius consequatur
        cum quisquam distinctio fugiat? Placeat, ad!
      </div>
    </section>
  );
};

const HomeExperience = () => {
  return (
    <section className="home-experience">
      <div className="home-experience-box"></div>
      <div className="home-experience-box"></div>
    </section>
  );
};

const HomeChemistry = () => {
  return (
    <section className="home-chemistry">
      <div className="home-chemistry-box"></div>
      <div className="home-chemistry-box"></div>
    </section>
  );
};

const HomeKeynote = () => {
  return (
    <section className="home-keynote">
      <div className="home-keynote-box"></div>
      <div className="home-keynote-box"></div>
    </section>
  );
};

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeIntroduction />
        <HomeExperience />
        <HomeChemistry />
        <HomeKeynote />
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
