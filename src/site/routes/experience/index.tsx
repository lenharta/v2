import { Title } from '@/core';
import { Box, Page } from '@/site/components';

export const ExperienceHero = () => {
  return (
    <Page.Hero className="sec-experience-hero">
      <Box className="sec-experience-hero-content">
        <Title className="sec-experience-hero-title">Experience</Title>
      </Box>
    </Page.Hero>
  );
};

export function Experience() {
  return (
    <Page>
      <ExperienceHero />
      <Page.Content></Page.Content>
    </Page>
  );
}
