import { HomeHero } from './HomeHero';
import { Box, Page, Section } from '@/site/components';
import { Button, Text, Title } from '@/core';
import { useThemeDispatch } from '@/store';

export const HomeOverview = () => {
  return (
    <Section scheme="primary" className="sec-home-overview">
      <Section.Content className="sec-home-overview-content">
        <Box className="sec-home-overview-box">
          <Title h2>Overview</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </Box>
      </Section.Content>
    </Section>
  );
};

const SiteConstructionBox = () => {
  const { setMode } = useThemeDispatch();
  return (
    <Section className="sec-construction-box">
      <Section.Content className="sec-construction-box-content">
        <Button.Group>
          <Button onClick={() => setMode('light')}>Light</Button>
          <Button onClick={() => setMode('dark')}>Dark</Button>
          <Button onClick={() => setMode('dim')}>Dim</Button>
        </Button.Group>
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
        <SiteConstructionBox />
      </Page.Content>
    </Page>
  );
}
