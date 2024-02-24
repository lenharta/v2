import { Page, Section } from '@/app/layouts';
import { Checkbox } from '@/common';

const DemoControlled = () => {
  return <Checkbox />;
};

const DemoValidation = () => {
  return <Checkbox />;
};

const DemoSingle = () => {
  return <Checkbox />;
};

const DemoGroup = () => {
  return <Checkbox />;
};

export const DemoCheckbox = () => {
  return (
    <Page>
      <Page.Hero title="Demo | Checkbox" />
      <Page.Content>
        <Section>
          <DemoControlled />
          <DemoValidation />
          <DemoSingle />
          <DemoGroup />
        </Section>
      </Page.Content>
    </Page>
  );
};
