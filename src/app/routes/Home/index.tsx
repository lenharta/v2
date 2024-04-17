import * as React from 'react';
import { Page, Section } from '@/app/common';
import { HomeHero } from './HomeHero';
import { HomeA11y } from './HomeA11y';
import { HomeTiles } from './HomeTiles';
import { HomeOverview } from './HomeOverview';
import { Box, Icon, Text, Title } from '@/core';

type HomeRouteComponent = React.FC<{}>;

// Located in the United States, I'm currently searching for opportunities join a team of
// talented engineers that impact and drive transformative thinking in the industry.

// - Create responsive designs that look amazing on any device
// - Develop stunning front-end interfaces that captivate and engage users
// - Implement intuitive solutions to complex technical challenges
// - Utilize modern technologies to stay ahead of the curve

// ### Doran Jones Inc.
// Data Engineering and Application Development Firm, specializing in financial services, capital markets, risk, and regulatory compliance.

// ### Hatch.co
// Technology-driven start-up, that develops a suite of smart devices to help you sleep better at night and create healthy sleeping habits for the whole family.

// ### Hawthorne Residential Partners
// Real Estate Development and Property Management Firm that provides services in the apartment industry throughout the Southeastern United States

// ### Pace Communications
// Award winning Creative Marketing Agency specializing in brand storytelling, discovery, data-driven insights, UX design, and web development.

// Accessibility Is An Afterthought. We Want To Change That.

// The 2023 WebAIM Million Report has found that across one million home pages tested, 49,991,225 distinct accessibility errors were detected.

// Providing an inclusive experience to all allows more opportunities for users to access content regardless of ability, device type, connection speed and location.

// 96.1% of all errors detected fall into these six categories; Addressing just these types of issues, which take seconds, would significantly improve accessibility across the web.

// create with courage, think freely, and image possibilities!

// creative expertise and technical acumen leverage a combination of tried and true principles to deliver world-class solutions

// WHAT I DO

// - Product Engineering

////////

// INDUSTRIES
// We support global brands, startups and enterprises that use innovation and human-centered design to create meaningful customer experiences.

// FINANCIAL SERVICES
// Our customers range from startups to the largest financial institutions across the globe. Staying true to our mission

// Over

export const HomeSectionOverview = () => (
  <Section className="sec-home-overview">
    <Box className="sec-home-overview-box" data-position="left">
      <Text>
        Seeking opportunities with a team of talented engineers that impact and drive transformative
        thinking.
      </Text>
    </Box>
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

export const HomeSectionKeynote = () => (
  <Section>
    <Box className="sec-home-keynote-box">
      <Title>From Startups to Titans of Industries</Title>
      <Text>
        I've crafted a proven track record from early-stage start-ups to Fortune 100 companies,
        contributing to large scale projects for global brands and enterprises that use innovation
        and human-centered design to create meaningful customer experiences.
      </Text>
    </Box>
  </Section>
);

export const Home: HomeRouteComponent = ({}) => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeSectionOverview />
      </Page.Content>
    </Page>
  );
};

Home.displayName = '@v2/app/Route.Home';
