import { HomeHero } from './HomeHero';
import { Box, Page, Section } from '@/site/components';
import { Button, Subtitle, Text, Title } from '@/core';
import { useThemeDispatch } from '@/store';
import { Core } from '@/types';

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

const DemoSection = ({ scheme = 'primary' }: { scheme?: Core.Scheme }) => {
  return (
    <Section scheme={scheme} className="sec-demo">
      <Section.Header>
        <Title>Section Title</Title>
      </Section.Header>
      <Section.Content>
        <Box>
          <Subtitle>Section Subtitle</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem ad nobis. Natus, eaque
            quod dicta quam animi dignissimos at. Libero consequuntur modi, debitis maxime culpa
            eaque. Quasi, earum minus!
          </Text>
        </Box>
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
        <DemoSection scheme="primary" />
        <DemoSection scheme="secondary" />
        <DemoSection scheme="tertiary" />
        <SiteConstructionBox />
      </Page.Content>
    </Page>
  );
}
