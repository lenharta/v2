import * as React from 'react';
import { Box } from '@/core';
import { Page, Section } from '@/app/common';
import { useNavigate } from 'react-router-dom';

import { HomeHero } from './HomeHero';
import { HomeExpSection } from './HomeExp';
import { HomeIntroSection } from './HomeIntro';
import { HomeRouteTile } from './HomeTile';
import { HomeChemistrySection } from './HomeChem';
import { HomeForwardHero } from './HomeForward';

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
  const navigate = useNavigate();
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeIntroSection lang="english" />
        <HomeExpSection lang="english" navigate={navigate} />
        <HomeChemistrySection />
        <HomeForwardHero />
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
