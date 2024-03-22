import { Page } from '@/app/components';
import { Button, Tabs, Text, Title } from '@/common';
import { Language } from '@/types';
import { objectKeys } from '@/utils';

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
    <Tabs.Root defaultValue="tab-a" elevated>
      <Tabs.List>
        <Tabs.Item value="tab-a" label="Tab A" />
        <Tabs.Item value="tab-b" label="Tab B" />
        <Tabs.Item value="tab-c" label="Tab C" />
      </Tabs.List>
      <Tabs.Panel value="tab-a" children="Content A" style={{ padding: 24 }} />
      <Tabs.Panel value="tab-b" children="Content B" style={{ padding: 24 }} />
      <Tabs.Panel value="tab-c" children="Content C" style={{ padding: 24 }} />
    </Tabs.Root>
  </Page.Section>
);

export const DemoButton = () => (
  <Page.Section>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Page.Section>
);

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <DemoButton />
      <DemoTabs />
    </Page.Content>
  </Page>
);
