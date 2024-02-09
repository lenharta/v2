import { Button, Page } from '@/common';
import { useThemeCTX } from '@/store';

const ModeController = () => {
  const { setMode } = useThemeCTX();
  return (
    <div>
      <Button onClick={() => setMode('light')}>Light Mode</Button>
      <Button onClick={() => setMode('dark')}>Dark Mode</Button>
      <Button onClick={() => setMode('dim')}>Dim Mode</Button>
    </div>
  );
};

export function Home() {
  return (
    <Page className="page">
      <Page.Header>
        <span>Page Header</span>
      </Page.Header>
      <Page.Hero title="Home" />
      <Page.Content>
        <Page.Section>
          <Page.Container>
            <ModeController />
          </Page.Container>
        </Page.Section>
      </Page.Content>
    </Page>
  );
}
