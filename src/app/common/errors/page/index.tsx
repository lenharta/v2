import { Title } from '@/core';
import { Page } from '@/app/common/page';

type PageErrorComponent = React.FC<{}>;

export const PageError: PageErrorComponent = ({}) => {
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

PageError.displayName = '@v2/app/Page.Error';
