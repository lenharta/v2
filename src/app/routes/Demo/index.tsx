import React from 'react';
import { Text } from '@/core';
import { DemoHero } from './DemoHero';
import { Page, Section } from '@/app/layouts';

export const Demo: React.FC<{}> = ({}) => {
  return (
    <Page hero={<DemoHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Demo.displayName = '@v2/route/Demo';
