import { Page } from '@/app/page';
import { Title } from '@/core';

type SandboxRouteComponent = React.FC<{}>;

export const Sandbox: SandboxRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Sandbox Route</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Sandbox.displayName = '@v2/app/Route.Sandbox';
