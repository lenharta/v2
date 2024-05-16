import React from 'react';
import { Text, Title } from '@/core';
import { ExperienceError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface ExperienceProps {}

type ExperienceComponent = React.FC<ExperienceProps> & {
  Error: typeof ExperienceError;
};

const Experience: ExperienceComponent = () => {
  return (
    <Page>
      <Hero>
        <Title>Experience</Title>
      </Hero>
      <Main>
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam ex recusandae
            velit sequi quae qui! Animi ea unde, asperiores ratione dolorem facere consectetur fuga
            iusto, quae impedit perferendis deserunt.t
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Experience.Error = ExperienceError;
Experience.displayName = '@v2/Experience';
export { Experience };
