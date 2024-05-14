import React from 'react';
import { Text } from '@/core';
import { Page, Section } from '@/app/layouts';
import { ExperienceHero } from './ExperienceHero';

export const Experience: React.FC<{}> = ({}) => {
  return (
    <Page hero={<ExperienceHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Experience.displayName = '@v2/route/Experience';
