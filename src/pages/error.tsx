import { Page } from '@/common';

export function RootError() {
  return (
    <Page>
      <Page.Hero title="[ERROR-404]: Page Not Found." />
      <Page.Content></Page.Content>
    </Page>
  );
}
