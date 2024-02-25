import { Section } from '@/app/layouts';
import { Text, Title } from '@/common';

export const HomeOverview = () => {
  return (
    <Section className="sec-home-overview">
      <Section.Header className="sec-home-overview-header">
        <Title scheme="accent" size="xxs" h2>
          Overview
        </Title>
        <Title size="md" h3>
          Front-end Software Engineer, Human-Centered Problem Solver.
        </Title>
      </Section.Header>
      <Section.Content className="sec-home-overview-content">
        <Text lead="sm">
          Striving to improve the human relationship with technology by designing and building
          meaningful digital experiences for the modern world. wealth of expertise in modern
          front-end technologies such as TypeScript, React.js, CSS, and more.
        </Text>
      </Section.Content>
    </Section>
  );
};
