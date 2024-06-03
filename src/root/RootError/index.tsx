import { Text, Title } from '@/core';
import { Main, Page, Section } from '@/common';

type RootErrorFactory = React.FC<{}>;

const RootError: RootErrorFactory = () => (
  <Page>
    <Main>
      <Section>
        <Title>Page Error: 404</Title>
        <Text>There was trouble loading the page.</Text>
      </Section>
    </Main>
  </Page>
);

RootError.displayName = '@v2/Root.Error';
export { RootError };
