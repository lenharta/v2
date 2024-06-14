import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

const ToolboxRoute: React.FC<{}> = () => (
  <Page>
    <Hero title="Toolbox" />
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

ToolboxRoute.displayName = '@v2/Route.Toolbox';
export { ToolboxRoute };
