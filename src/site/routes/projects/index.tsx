import { Title } from '@/core';
import { Box, Page } from '@/site/components';

export const ProjectsHero = () => {
  return (
    <Page.Hero className="sec-projects-hero">
      <Box className="sec-projects-hero-content">
        <Title className="sec-projects-hero-title">Projects</Title>
      </Box>
    </Page.Hero>
  );
};

export function Projects() {
  return (
    <Page>
      <ProjectsHero />
      <Page.Content></Page.Content>
    </Page>
  );
}
