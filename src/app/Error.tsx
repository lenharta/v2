import { Page } from '@/app/layouts';

export const Error = () => {
  return (
    <Page>
      <Page.Hero title="Page Not Found" />
      <Page.Content>
        <p>ERROR-404: Sorry, we had trouble finding that.</p>
      </Page.Content>
    </Page>
  );
};
