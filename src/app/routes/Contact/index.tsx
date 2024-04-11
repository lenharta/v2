import { Page } from '@/app/page';
import { Title } from '@/core';

type ContactRouteComponent = React.FC<{}>;

export const Contact: ContactRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Contact Route</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Contact.displayName = '@v2/app/Route.Contact';
