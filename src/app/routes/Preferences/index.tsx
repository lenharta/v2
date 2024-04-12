import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type PreferencesRouteComponent = React.FC<{}>;

export const Preferences: PreferencesRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Preferences</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Preferences.displayName = '@v2/app/Route.Preferences';
