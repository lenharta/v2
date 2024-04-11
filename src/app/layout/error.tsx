import { Title } from '@/core';
import { Page } from '../page';

type ErrorLayoutComponent = React.FC<{}>;

export const ErrorLayout: ErrorLayoutComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Error | Layout</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

ErrorLayout.displayName = '@v2/site/Layout.Error';
