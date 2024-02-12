import { useThemeCTX } from '@/store';
import { Button, Page } from '@/common';

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

export function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Page.Container>
          <ModeController />
        </Page.Container>
      </Page.Content>
    </Page>
  );
}
