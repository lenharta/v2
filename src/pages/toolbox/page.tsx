import { useThemeCTX } from '@/store';
import { Button, Checkbox, Page, Radio, Section, Stack, Switch, Title } from '@/common';

const ModeController = () => {
  const { state, setMode } = useThemeCTX();
  return (
    <div>
      <div>CURRENT MODE: {state.mode?.toUpperCase()}</div>
      <div>
        <Button onClick={() => setMode('light')}>Light Mode</Button>
        <Button onClick={() => setMode('dark')}>Dark Mode</Button>
        <Button onClick={() => setMode('dim')}>Dim Mode</Button>
      </div>
    </div>
  );
};

const DemoSection = () => (
  <Section>
    <Section.Container>
      <Section.Header>
        <Title>Section Header</Title>
      </Section.Header>
      <Section.Content>
        <Title>Section Content</Title>
      </Section.Content>
    </Section.Container>
  </Section>
);

const DemoInputComponents = () => (
  <Section>
    <Section.Container>
      <Section.Header>
        <Title>Component Demos</Title>
      </Section.Header>
      <Section.Content>
        <ModeController />
        <Stack>
          <Checkbox label="Checkbox Label" />
          <Switch label="Switch Label" />
          <Radio label="Radio Label" />
        </Stack>
      </Section.Content>
    </Section.Container>
  </Section>
);

export function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <DemoSection />
        <DemoInputComponents />
      </Page.Content>
    </Page>
  );
}
