import { Subtitle, Text, Title } from '@/core';
import { Box, Page, Section } from '@/site/components';

export const ArticlesHero = () => {
  return (
    <Page.Hero>
      <Box>
        <Title>Articles</Title>
      </Box>
    </Page.Hero>
  );
};

export const ArticlesOverview = () => {
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

export function Articles() {
  return (
    <Page>
      <ArticlesHero />
      <Page.Content>
        <ArticlesOverview />
      </Page.Content>
    </Page>
  );
}
