import { Subtitle, Text, Title } from '@/core';
import { Box, Page, Section } from '@/site/components';

export const ProjectsHero = () => {
  return (
    <Page.Hero>
      <Box>
        <Title>Projects</Title>
      </Box>
    </Page.Hero>
  );
};

export const ProjectsOverview = () => {
  return (
    <Section>
      <Section.Header>
        <Title>Overview</Title>
      </Section.Header>
      <Section.Content>
        <Box>
          <Subtitle>Subtitle</Subtitle>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptate beatae
            blanditiis sequi tempore accusantium eius, dolorum, at culpa odio repellendus, earum
            maxime quis. Dolores labore accusantium necessitatibus nesciunt ullam?
          </Text>
        </Box>
      </Section.Content>
    </Section>
  );
};

export function Projects() {
  return (
    <Page>
      <ProjectsHero />
      <Page.Content>
        <ProjectsOverview />
      </Page.Content>
    </Page>
  );
}
