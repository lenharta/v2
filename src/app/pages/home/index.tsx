import { Page } from '@/app/components';
import { Text, Title } from '@/common';
import { Language } from '@/types';

interface CommonSectionProps {
  lang?: Language;
}

const HomeOverview = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-overview">
    <div className="home-sec-overview">
      <Title h2>Overview</Title>
    </div>
  </Page.Section>
);

const HomeExperience = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-experience">
    <div className="home-sec-experience">
      <Title h2>Experience</Title>
    </div>
  </Page.Section>
);

const HomeTimeline = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-timeline">
    <div className="home-sec-timeline">
      <Title h2>Timeline</Title>
    </div>
  </Page.Section>
);

const HomeHero = ({}: CommonSectionProps) => (
  <Page.Hero>
    <div className="home-hero">
      <Title h2 className="home-hero-subheadline" children="Andrew Lenhart" />
      <Title h1 className="home-hero-headline" children="Software Engineer" />
    </div>
  </Page.Hero>
);

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <HomeOverview />
      <HomeExperience />
      <HomeTimeline />
    </Page.Content>
  </Page>
);
