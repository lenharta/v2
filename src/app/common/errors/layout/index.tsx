import { Title } from '@/core';
import { Page } from '@/app/common/page';

type LayoutErrorComponent = React.FC<{}>;

export const LayoutError: LayoutErrorComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Error Layout</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

LayoutError.displayName = '@v2/app/Layout.Error';
