import React from 'react';
import { Text } from '@/core';
import { SandboxHero } from './SandboxHero';
import { Page, Section } from '@/app/layouts';

export const Sandbox: React.FC<{}> = ({}) => {
  return (
    <Page hero={<SandboxHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Sandbox.displayName = '@v2/route/Sandbox';
