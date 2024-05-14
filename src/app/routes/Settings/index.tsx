import React from 'react';
import { cx } from '@/app/utils';
import { Box, Icon, Tabs, Text } from '@/core';
import { Page, Section } from '@/app/layouts';

import { SettingsHero } from './SettingsHero';
import { SettingsGroup } from './SettingsGroup';
import { SettingsPanel } from './SettingsPanel';

type SettingsComponent = React.FC<{}> & {
  Hero: typeof SettingsHero;
  Group: typeof SettingsGroup;
  Panel: typeof SettingsPanel;
};

const SettingsTabPanel1 = () => {
  return (
    <Tabs.Panel value="item-1">
      <Text>Panel 1</Text>
    </Tabs.Panel>
  );
};
const SettingsTabPanel2 = () => {
  return (
    <Tabs.Panel value="item-2">
      <Text>Panel 2</Text>
    </Tabs.Panel>
  );
};
const SettingsTabPanel3 = () => {
  return (
    <Tabs.Panel value="item-3">
      <Text>Panel 3</Text>
    </Tabs.Panel>
  );
};

export const Settings: SettingsComponent = () => {
  return (
    <Page hero={<Settings.Hero />}>
      <Section>
        <Tabs defaultValue="item-1">
          <Tabs.List>
            <Tabs.Item value="item-1">Item 1</Tabs.Item>
            <Tabs.Item value="item-2">Item 2</Tabs.Item>
            <Tabs.Item value="item-3">Item 3</Tabs.Item>
          </Tabs.List>
          <SettingsTabPanel1 />
          <SettingsTabPanel2 />
          <SettingsTabPanel3 />
        </Tabs>
      </Section>
    </Page>
  );
};

Settings.Hero = SettingsHero;
Settings.Panel = SettingsPanel;
Settings.Group = SettingsGroup;
Settings.displayName = '@v2/route/Settings';
