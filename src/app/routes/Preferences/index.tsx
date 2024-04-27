import * as React from 'react';
import { Page } from '@/app/common';

type PreferencesRouteComponent = React.FC<{}>;

export const Preferences: PreferencesRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Preferences" />
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Preferences.displayName = '@v2/app/Route.Preferences';
