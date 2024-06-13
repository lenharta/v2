import React from 'react';
import { Icon, Select, Tabs } from '@/core';
import { Hero, Page, Section } from '@/common';
import { SettingsPanel } from './SettingsPanel';
import { SettingsError } from './settings-error';

type SettingsRouteFactory = React.FC<{}> & {
  Error: typeof SettingsError;
  Panel: typeof SettingsPanel;
};

const DATA_SELECT_ITEMS_SIMPLE = ['item-01', 'item-02', 'item-03', 'item-04', 'item-05'];

const DATA_SELECT_ITEMS_COMPLEX_LONG = [
  { value: 'item-01', label: 'Option 1' },
  { value: 'item-02', label: 'Option 2' },
  { value: 'item-03', label: 'Option 3' },
  { value: 'item-04', label: 'Option 4' },
  { value: 'item-05', label: 'Option 5' },
  { value: 'item-06', label: 'Option 6' },
  { value: 'item-07', label: 'Option 7' },
  { value: 'item-08', label: 'Option 8' },
  { value: 'item-09', label: 'Option 9' },
  { value: 'item-10', label: 'Option 10' },
  { value: 'item-11', label: 'Option 11' },
  { value: 'item-12', label: 'Option 12' },
  { value: 'item-13', label: 'Option 13' },
  { value: 'item-14', label: 'Option 14' },
  { value: 'item-15', label: 'Option 15' },
  { value: 'item-16', label: 'Option 16' },
  { value: 'item-17', label: 'Option 17' },
  { value: 'item-18', label: 'Option 18' },
  { value: 'item-19', label: 'Option 19' },
  { value: 'item-20', label: 'Option 20' },
];

const DATA_SELECT_ITEMS_COMPLEX = [
  { value: 'item-01', label: 'Option 1' },
  { value: 'item-02', label: 'Option 2' },
  { value: 'item-03', label: 'Option 3' },
  { value: 'item-04', label: 'Option 4' },
  { value: 'item-05', label: 'Option 5' },
];

const DATA_SELECT_GROUP_COMPLEX = [
  {
    group: 'Option Group 1',
    items: [
      { value: 'group-01-item-01', label: 'Option 1' },
      { value: 'group-01-item-02', label: 'Option 2' },
      { value: 'group-01-item-03', label: 'Option 3' },
      { value: 'group-01-item-04', label: 'Option 4' },
      { value: 'group-01-item-05', label: 'Option 5' },
    ],
  },
  {
    group: 'Option Group 2',
    items: [
      { value: 'group-02-item-01', label: 'Option 1' },
      { value: 'group-02-item-02', label: 'Option 2' },
      { value: 'group-02-item-03', label: 'Option 3' },
      { value: 'group-02-item-04', label: 'Option 4' },
      { value: 'group-02-item-05', label: 'Option 5' },
    ],
  },
];

const SettingsPanelUser = () => {
  const [value, onChange] = React.useState<string[]>([]);
  return (
    <Tabs.Panel value="user">
      <Select data={DATA_SELECT_ITEMS_SIMPLE} value={value} onChange={onChange} withDivider />
    </Tabs.Panel>
  );
};

const SettingsPanelTheme = () => {
  const [value, onChange] = React.useState<string[]>([]);
  return (
    <Tabs.Panel value="theme">
      <Select
        data={DATA_SELECT_ITEMS_COMPLEX_LONG}
        value={value}
        onChange={onChange}
        withDivider
        maxHeight={500}
      />
    </Tabs.Panel>
  );
};

const SettingsPanelLocale = () => {
  const [value, onChange] = React.useState<string[]>([]);
  return (
    <Tabs.Panel value="locale">
      <Select
        withDivider
        // dividerProps={{ variant: 'elevated', position: 'start', size: 'sm' }}
        onChange={onChange}
        value={value}
        data={DATA_SELECT_GROUP_COMPLEX}
      />
    </Tabs.Panel>
  );
};

const SettingsPanelMultiple = () => {
  const [value, onChange] = React.useState<string[]>([]);
  return (
    <Tabs.Panel value="multiple">
      <Select
        data={DATA_SELECT_ITEMS_COMPLEX}
        behavior="multiple"
        onChange={onChange}
        value={value}
      />
    </Tabs.Panel>
  );
};

const Settings: SettingsRouteFactory = () => (
  <Page>
    <Hero title="Settings" />
    <Section>
      <Tabs defaultValue="user" variant="elevated">
        <Tabs.List>
          <Tabs.Item value="user" label="User" leftContent={<Icon name="person" />} />
          <Tabs.Item value="theme" label="Theme" leftContent={<Icon name="palette" />} />
          <Tabs.Item value="locale" label="Locale" leftContent={<Icon name="globe-americas" />} />
          <Tabs.Item value="multiple" label="Multiple" leftContent={<Icon name="layers-half" />} />
        </Tabs.List>
        <SettingsPanelUser />
        <SettingsPanelTheme />
        <SettingsPanelLocale />
        <SettingsPanelMultiple />
      </Tabs>
    </Section>
  </Page>
);

Settings.Panel = SettingsPanel;
Settings.Error = SettingsError;
Settings.displayName = '@v2/Settings.Route';
export { Settings };
