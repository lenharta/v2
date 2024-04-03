import * as React from 'react';
import { HomeHero } from './HomeHero';
import { Page, Section } from '@/site/components';
import { Subtitle, Tabs, Text, Title } from '@/core';

export const HomeOverview = () => {
  return (
    <Section className="sec-home-overview">
      <Section.Content className="sec-home-overview-content">
        <div className="sec-home-overview-box" data-scheme="primary">
          <Title h2 className="sec-home-overview-title">
            Overview
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </div>
        <div className="sec-home-overview-box" data-scheme="primary">
          <Title h3 className="sec-home-overview-title">
            Section Title
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </div>
      </Section.Content>
    </Section>
  );
};

const DemoPanelContent = ({ title = 'Demo Panel' }: { title?: string }) => {
  return (
    <Section>
      <Section.Header>{title}</Section.Header>
      <Section.Content>
        <div>
          <Subtitle>Subtitle</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id corrupti. Vero
            magni voluptates aut rerum, corporis sunt? Quisquam nulla architecto velit dolore
            deserunt enim ab expedita dolor commodi sed.
          </Text>
        </div>
        <div>
          <Subtitle>Subtitle</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id corrupti. Vero
            magni voluptates aut rerum, corporis sunt? Quisquam nulla architecto velit dolore
            deserunt enim ab expedita dolor commodi sed.
          </Text>
        </div>
      </Section.Content>
    </Section>
  );
};

const DemoTabsUncontrolled = () => {
  return (
    <div>
      <header>
        <Title>Tabs (Uncontrolled)</Title>
      </header>
      <div>
        <Tabs defaultValue="tab-1A">
          <Tabs.List>
            <Tabs.Item value="tab-1A">Tab #1</Tabs.Item>
            <Tabs.Item value="tab-2A">Tab #2</Tabs.Item>
            <Tabs.Item value="tab-3A">Tab #3</Tabs.Item>
            <Tabs.Item value="tab-4A">Tab #4</Tabs.Item>
            <Tabs.Item value="tab-5A">Tab #5</Tabs.Item>
          </Tabs.List>

          <Tabs.Panel keepMounted value="tab-1A" children={<span>Panel #1A</span>} />
          <Tabs.Panel keepMounted value="tab-2A" children={<span>Panel #2A</span>} />
          <Tabs.Panel keepMounted value="tab-3A" children={<span>Panel #3A</span>} />
          <Tabs.Panel keepMounted value="tab-4A" children={<span>Panel #4A</span>} />
          <Tabs.Panel keepMounted value="tab-5A" children={<span>Panel #5A</span>} />
        </Tabs>
      </div>
    </div>
  );
};

const DemoTabsControlled = () => {
  const [value, onChange] = React.useState('tab-1B');
  return (
    <div>
      <header>
        <Title>Tabs (Controlled)</Title>
      </header>
      <div>
        <Tabs value={value} onChange={onChange}>
          <Tabs.List>
            <Tabs.Item value="tab-1B">Tab #1</Tabs.Item>
            <Tabs.Item value="tab-2B">Tab #2</Tabs.Item>
            <Tabs.Item value="tab-3B">Tab #3</Tabs.Item>
            <Tabs.Item value="tab-4B">Tab #4</Tabs.Item>
            <Tabs.Item value="tab-5B">Tab #5</Tabs.Item>
          </Tabs.List>
          <Tabs.Panel value="tab-1B" children={<span>Panel #1B</span>} />
          <Tabs.Panel value="tab-2B" children={<span>Panel #2B</span>} />
          <Tabs.Panel value="tab-3B" children={<span>Panel #3B</span>} />
          <Tabs.Panel value="tab-4B" children={<span>Panel #4B</span>} />
          <Tabs.Panel value="tab-5B" children={<span>Panel #5B</span>} />
        </Tabs>
      </div>
    </div>
  );
};

export function Home() {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <DemoTabsUncontrolled />
        <DemoTabsControlled />
      </Page.Content>
    </Page>
  );
}
