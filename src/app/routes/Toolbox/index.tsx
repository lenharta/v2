import { Page } from '@/app/page';
import { Title } from '@/core';

type ToolboxRouteComponent = React.FC<{}>;

export const Toolbox: ToolboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Toolbox Route</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Toolbox.displayName = '@v2/app/Route.Toolbox';
