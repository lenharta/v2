import { useThemeCTX } from '@/store';
import { Button, Checkbox, Page, Radio, Stack, Switch } from '@/common';

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

const CheckboxDemo = () => {
  return <Checkbox label="Checkbox Label" />;
};
const SwitchDemo = () => {
  return <Switch label="Switch Label" />;
};
const RadioDemo = () => {
  return <Radio label="Radio Label" />;
};

export function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Page.Container>
          <ModeController />

          <Stack>
            <CheckboxDemo />
            <SwitchDemo />
            <RadioDemo />
          </Stack>
        </Page.Container>
      </Page.Content>
    </Page>
  );
}
