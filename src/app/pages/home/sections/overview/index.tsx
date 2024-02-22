import { Section } from '@/app/layouts';
import { Stack, Text, Title } from '@/common';

export const SectionHomeOverview = () => {
  return (
    <Section py="lg">
      <Stack gap="md">
        <Title component="h2" size="xxs" scheme="accent-high">
          Overview
        </Title>
        <Title component="h3">Front-end Software Engineer, Human-Centered Problem Solver.</Title>
        <Stack gap="md">
          <Text scheme="med">
            Striving to improve the human relationship with technology by designing and building
            meaningful digital experiences for the modern world. wealth of expertise in modern
            front-end technologies such as TypeScript, React.js, CSS, and more.
          </Text>
        </Stack>
      </Stack>
    </Section>
  );
};
