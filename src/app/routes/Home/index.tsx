import * as React from 'react';
import { Page, Section } from '@/app/common';
import { HomeHero } from './HomeHero';
import { Box, Stack, Text } from '@/core';

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
        <Section className="sec-home-overview">
          <Box>
            <Text>
              Seeking opportunities with a team of talented engineers that impact and drive
              transformative thinking.
            </Text>
          </Box>
          <Box>
            <Text>
              Seeking opportunities with a team of talented engineers that impact and drive
              transformative thinking.
            </Text>
          </Box>
        </Section>
        <Section className="sec-home-test-1">
          <Box>
            <Text>
              Creative expertise and technical acumen in product engineering to deliver world-class
              solutions that create meaningful customer experiences.
            </Text>
          </Box>
          <Box>
            <Text>
              Total Market Capitalization of indutry giants I've had the privilege of collaborating
              with and delivered production-used technologies for.
            </Text>
          </Box>
          <Box>
            <Text>
              Unique and re-usable interfaces delivered to clients on-time and under budget,
              including a full-featured, customizable library for a Fortune 500 Company in the
              Financial Sector.
            </Text>
          </Box>
          <Box>
            <Text>
              Putting your heart into your work and rigor to execute the best result possible, the
              formula tends to equate long hours. Although a passion for development and a good cup
              of coffee will see you through!
            </Text>
          </Box>
        </Section>
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
