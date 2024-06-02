import React from 'react';
import { Text, Title } from '@/core';
import { SettingsError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface SettingsProps {}

type SettingsComponent = React.FC<SettingsProps> & {
  Error: typeof SettingsError;
};

const Settings: SettingsComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Settings</Title>} />
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

Settings.Error = SettingsError;
Settings.displayName = '@v2/Settings';
export { Settings };
