import { Page, Section } from '@/app/layouts';
import { HomeHero } from './sections/hero';
import { HomeOverview } from './sections/overview';
import { Text, Title } from '@/common';

const HomePrinciples = () => (
  <Section className="sec-home-principles">
    <Section.Header className="sec-home-principles-header">
      <Title lead="sm" size="md" h3>
        Think Freely, Open Minds, <span className="accent">Create With Courage,</span>
      </Title>
    </Section.Header>
    <Section.Content className="sec-home-principles-content"></Section.Content>
  </Section>
);

const HomeMomentum = () => (
  <Section className="sec-home-principles">
    <Section.Header className="sec-home-principles-header"></Section.Header>
    <Section.Content className="sec-home-principles-content"></Section.Content>
  </Section>
);

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <HomePrinciples />
      </Page.Content>
    </Page>
  );
};
