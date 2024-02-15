import { Page, Section, Title } from '@/common';

export const Preferences = () => {
  return (
    <Page>
      <Page.Hero title="Preferences" />
      <Page.Content>
        <Section>
          <Title component="h3">Theme Mode</Title>
        </Section>
        <Section>
          <Title component="h3">Accent Color</Title>
        </Section>
        <Section>
          <Title component="h3">Avatar Icon</Title>
        </Section>
        <Section></Section>
      </Page.Content>
    </Page>
  );
};
