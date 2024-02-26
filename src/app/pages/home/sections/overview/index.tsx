import { Section } from '@/app/layouts';
import { Text, Title } from '@/common';

export const HomeOverview = () => {
  return (
    <Section className="sec-home-overview">
      <Section.Header className="sec-home-overview-header">
        <Title scheme="accent" size="xxs" h2>
          Overview
        </Title>
        <Title lead="sm" size="md" h3>
          Front-end Engineer, Human-Centered Problem Solver.
        </Title>
      </Section.Header>
      <Section.Content className="sec-home-overview-content">
        <Text lead="md" size="md">
          Striving to improve the human relationship with technology by devloping meaningful and
          accessible digital experiences for the modern world.
        </Text>
      </Section.Content>
    </Section>
  );
};
