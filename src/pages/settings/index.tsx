import { Icon, Tabs } from '@/core';
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
      <Tabs defaultValue="user" scheme="primary-1-interactive" variant="default">
        <Tabs.List>
          <Tabs.Item value="user" label="User" leftContent={<Icon />} />
          <Tabs.Item value="theme" label="Theme" leftContent={<Icon />} />
          <Tabs.Item value="locale" label="Locale" leftContent={<Icon />} />
        </Tabs.List>
        <Tabs.Panel value="theme">
          <span>Settings | Theme Panel</span>
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
