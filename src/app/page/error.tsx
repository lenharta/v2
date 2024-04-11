import { Page } from '@/app/page';
import { Title } from '@/core';

type ErrorPageComponent = React.FC<{}>;

export const ErrorPage: ErrorPageComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Error Page</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

ErrorPage.displayName = '@v2/app/Page.Error';
