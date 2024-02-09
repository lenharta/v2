import { useThemeCTX } from '@/store';
import { Button, Page } from '@/common';

const ModeController = () => {
  const { state, setMode } = useThemeCTX();
  console.log({ state });
  return (
    <div>
      <div>CURRENT MODE: {state.mode}</div>
      <div>
        <Button onClick={() => setMode('light')}>Light Mode</Button>
        <Button onClick={() => setMode('dark')}>Dark Mode</Button>
        <Button onClick={() => setMode('dim')}>Dim Mode</Button>
      </div>
    </div>
  );
};
export function Home() {
  return (
    <Page className="page">
      <Page.Header />
      <Page.Hero title="Home" />
      <Page.Content>
        <Page.Section>
          <Page.Container>
            <ModeController />
          </Page.Container>
        </Page.Section>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
}
