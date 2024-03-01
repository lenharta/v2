import { Text, Title } from '@/common';
import { Section } from '@/app/layouts';

const SampleCopy = `In crafting beautiful, repsonsive, and intuitive user interfaces across various global financial platforms. Most recently as part of an engineering team delivering a full featured UI component library for a multi-billion dollar financial institution based in the United States.`;

export const HomeExperience = () => {
  return (
    <Section scheme="secondary" className="sec-home-experience">
      <Section.Header className="sec-home-experience-header">
        <Title scheme="accent" size="xxs" h2>
          Experience
        </Title>
      </Section.Header>
      <Section.Content className="sec-home-experience-content"></Section.Content>
    </Section>
  );
};
