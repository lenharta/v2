import React from 'react';
import { Text } from '@/core';
import { ToolboxHero } from './ToolboxHero';
import { Page, Section } from '@/app/layouts';

export const Toolbox: React.FC<{}> = ({}) => {
  return (
    <Page hero={<ToolboxHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Toolbox.displayName = '@v2/route/Toolbox';
