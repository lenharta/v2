import React from 'react';
import { Text } from '@/core';
import { PreferencesHero } from './PreferencesHero';
import { Page, Section } from '@/app/layouts';

export const Preferences: React.FC<{}> = ({}) => {
  return (
    <Page hero={<PreferencesHero />}>
      <Section>
        <Text>Content</Text>
      </Section>
    </Page>
  );
};

Preferences.displayName = '@v2/route/Preferences';
