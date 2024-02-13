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

const DemoTitleComponents = () => (
  <Section>
    <Section.Container>
      <Section.Header>
        <Title component="h6">Title Component</Title>
      </Section.Header>
      <Section.Content>
        <Title component="h1">Heading 1</Title>
        <Title component="h2">Heading 2</Title>
        <Title component="h3">Heading 3</Title>
        <Title component="h4">Heading 4</Title>
        <Title component="h5">Heading 5</Title>
        <Title component="h6">Heading 6</Title>
      </Section.Content>
    </Section.Container>
  </Section>
);

const DemoInputComponents = () => (
  <Section>
    <Section.Container>
      <Section.Header title="Demo Components" titleProps={{ component: 'h4' }} />
      <Section.Content>
        <ModeController />
        <Stack>
          <Checkbox label="Checkbox Label" checked />
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
        {/* <DemoSection /> */}
        <DemoInputComponents />
        {/* <DemoTitleComponents /> */}
      </Page.Content>
    </Page>
  );
}
