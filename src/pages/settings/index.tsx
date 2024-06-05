import { Text, Title } from '@/core';
import { SettingsError } from './settings-error';
import { Hero, Page, Section } from '@/common';

type SettingsRouteFactory = React.FC<{}> & {
  Error: typeof SettingsError;
};

const Settings: SettingsRouteFactory = () => (
  <Page>
    <Hero title="Settings" />
    <Section>
      <Title h2>Section Title</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum ab corrupti eos
        repellendus maiores hic quo nulla cum, dolorem soluta quis saepe aliquid quibusdam?
        Doloribus veritatis corrupti consequuntur eius.
      </Text>
    </Section>
  </Page>
);

Settings.Error = SettingsError;
Settings.displayName = '@v2/Settings.Route';
export { Settings };
