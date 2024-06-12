import { Icon, Tabs, Text } from '@/core';
import { Hero, Page, Section } from '@/common';
import { SettingsPanel } from './SettingsPanel';
import { SettingsError } from './settings-error';

type SettingsRouteFactory = React.FC<{}> & {
  Error: typeof SettingsError;
  Panel: typeof SettingsPanel;
};

const Settings: SettingsRouteFactory = () => (
  <Page>
    <Hero title="Settings" />
    <Section>
      <Tabs defaultValue="user" variant="elevated">
        <Tabs.List>
          <Tabs.Item value="user" label="User" leftContent={<Icon />} />
          <Tabs.Item value="theme" label="Theme" leftContent={<Icon />} />
          <Tabs.Item value="locale" label="Locale" leftContent={<Icon />} />
        </Tabs.List>
        <Tabs.Panel value="theme">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--c-accent-A200)',
              color: 'var(--c-accent-A900)',
              height: 200,
              width: 600,
            }}
            children={<Text>A300</Text>}
          />
        </Tabs.Panel>
        <Tabs.Panel value="locale">
          <span>Settings | Locale Panel</span>
        </Tabs.Panel>
        <Tabs.Panel value="user">
          <span>Settings | User Panel</span>
        </Tabs.Panel>
      </Tabs>
    </Section>
  </Page>
);

Settings.Panel = SettingsPanel;
Settings.Error = SettingsError;
Settings.displayName = '@v2/Settings.Route';
export { Settings };
