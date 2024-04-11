import { Page } from '@/app/page';
import { Title } from '@/core';

type PreferencesRouteComponent = React.FC<{}>;

export const Preferences: PreferencesRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Preferences Route</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Preferences.displayName = '@v2/app/Route.Preferences';
