import { Title } from '@/common';
import { Page, Section } from '@/app/layouts';

import { HomeHero } from './hero';
import { HomeOverview } from './overview';

export const HomeMomentum = () => (
  <Section className="sec-home-principles">
    <Section.Header className="sec-home-principles-header"></Section.Header>
    <Section.Content className="sec-home-principles-content"></Section.Content>
  </Section>
);

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <HomeMomentum />
      </Page.Content>
    </Page>
  );
};
