import { Text, Title } from '@/core';
import { Page } from '@/site/components';

export function Demo() {
  return (
    <Page>
      <Page.Hero>
        <Title>Demo</Title>
      </Page.Hero>
      <Page.Content>
        <Text>Content</Text>
      </Page.Content>
    </Page>
  );
}

export * from './DemoScheme';
export * from './DemoTheme';
