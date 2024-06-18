import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

const ProjectsRoute: React.FC<{}> = () => (
  <Page>
    <Hero title="Projects" />
    <Section>
      <Title>Section</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
        nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
        reiciendis fugiat, ut tenetur.
      </Text>
    </Section>
  </Page>
);

ProjectsRoute.displayName = '@v2/Route.Projects';
export { ProjectsRoute };