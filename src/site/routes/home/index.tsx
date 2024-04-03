import { Text, Title } from '@/common';
import { Page, Section } from '@/site/components';
import { HomeHero } from './HomeHero';

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

export function Home() {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
      </Page.Content>
    </Page>
  );
}
