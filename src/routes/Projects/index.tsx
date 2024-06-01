import React from 'react';
import { Text, Title } from '@/core';
import { ProjectsError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface ProjectsProps {}

type ProjectsComponent = React.FC<ProjectsProps> & {
  Error: typeof ProjectsError;
};

const Projects: ProjectsComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Projects</Title>} />
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

Projects.Error = ProjectsError;
Projects.displayName = '@v2/Projects';
export { Projects };
