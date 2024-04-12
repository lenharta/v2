import * as React from 'react';
import { Page } from '@/app/common';
import { Title } from '@/core';

type ContactRouteComponent = React.FC<{}>;

export const Contact: ContactRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Contact</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Contact.displayName = '@v2/app/Route.Contact';
