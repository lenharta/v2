import * as React from 'react';
import { Page } from '@app/components';
import { SettingsHero } from './SettingsHero';

type SettingsFactory = React.FC<{}> & {
  Hero: typeof SettingsHero;
};

const Settings: SettingsFactory = ({}) => (
  <Page>
    <Settings.Hero />
  </Page>
);

Settings.Hero = SettingsHero;
Settings.displayName = '@v2/Settings.Route';
export { Settings };
