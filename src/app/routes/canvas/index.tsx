import React from 'react';
import { Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

const CanvasRoute: React.FC<{}> = () => (
  <Page>
    <Hero title="Canvas" />
    <Section>
      <Title h2>Table Component</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
        nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
        reiciendis fugiat, ut tenetur.
      </Text>
    </Section>
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };
