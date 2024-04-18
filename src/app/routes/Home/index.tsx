import * as React from 'react';
import { Page, Section } from '@/app/common';
import { Box, Text, Title } from '@/core';
import { HomeIntroSection } from './HomeIntro';
import { HomeA11ySection } from './HomeA11y';
import { HomeHero } from './HomeHero';
import { HomeExpSection } from './HomeExp';

type HomeRouteComponent = React.FC<{}>;

export const HomeSectionOverview = () => (
  <Section className="sec-home-overview">
    <Box className="sec-home-overview-box" data-position="left"></Box>
    <Box className="sec-home-overview-box" data-position="right">
      <table>
        <tbody>
          <tr>
            <td>Drive & Momentum</td>
            <td>
              Shape the future of the world's biggest brands-and have fun while doing it. That's
              what drives me to create with courage, think freely, and image possibilities!
            </td>
          </tr>
          <tr>
            <td>Creative Collaboration</td>
            <td>
              The ability to support the collective potential of a team, discover new paths for
              connection and creativity, and work together to tackle big challenges that grow our
              clients and move society forward.
            </td>
          </tr>
          <tr>
            <td>Emerging Technologies</td>
            <td>
              A dynamic environment that leverages the power of emerging technologies to drive
              innovation, and deliver transformative outcomes.
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  </Section>
);

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeIntroSection />
        <HomeExpSection />
        {/* <HomeA11ySection /> */}
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
