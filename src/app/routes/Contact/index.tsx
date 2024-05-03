import * as React from 'react';
import { Page } from '@/app/common';

type ContactRouteComponent = React.FC<{}>;

export const Contact: ContactRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero title="Contact" />
      <Page.Content></Page.Content>
    </Page>
  );
};

Contact.displayName = '@v2/app/Route.Contact';
