import { Page } from '@/app/components';
import { Tabs, Title } from '@/common';
import { Language } from '@/types';

interface CommonSectionProps {
  lang?: Language;
}

export const HomeOverview = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-overview">
    <div className="home-sec-overview">
      <Title h2>Overview</Title>
    </div>
  </Page.Section>
);

export const HomeExperience = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-experience">
    <div className="home-sec-experience">
      <Title h2>Experience</Title>
    </div>
  </Page.Section>
);

export const HomeTimeline = ({}: CommonSectionProps) => (
  <Page.Section id="home-sec-timeline">
    <div className="home-sec-timeline">
      <Title h2>Timeline</Title>
    </div>
  </Page.Section>
);

export const HomeHero = ({}: CommonSectionProps) => (
  <Page.Hero>
    <div className="home-hero">
      <Title h2 className="home-hero-subheadline" children="Andrew Lenhart" />
      <Title h1 className="home-hero-headline" children="Software Engineer" />
    </div>
  </Page.Hero>
);

export const DemoTabs = () => (
  <Page.Section>
    <Tabs.Root defaultValue="tab-value-1">
      <Tabs.List>
        <Tabs.Item value="tab-value-1" label="Tab 1" />
        <Tabs.Item value="tab-value-2" label="Tab 2" />
        <Tabs.Item value="tab-value-3" label="Tab 3" />
      </Tabs.List>
      <Tabs.Panel value="tab-value-1">Tab 1 | Panel Content</Tabs.Panel>
      <Tabs.Panel value="tab-value-2">Tab 2 | Panel Content</Tabs.Panel>
      <Tabs.Panel value="tab-value-3">Tab 3 | Panel Content</Tabs.Panel>
    </Tabs.Root>
  </Page.Section>
);

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <DemoTabs />
    </Page.Content>
  </Page>
);
