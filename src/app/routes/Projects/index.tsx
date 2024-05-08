import React from 'react';
import { Text } from '@/core';
import { ProjectsHero } from './ProjectsHero';
import { Page, Section } from '@/app/layouts';

export const Projects: React.FC<{}> = ({}) => {
  return (
    <Page hero={<ProjectsHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Projects.displayName = '@v2/route/Projects';
