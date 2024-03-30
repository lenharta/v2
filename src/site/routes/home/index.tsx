import { Page } from '@/site/components';
import { useThemeContext } from '@/site/store';

const ModeController = () => {
  const { setMode } = useThemeContext();
  return (
    <div>
      <button className="action-item" onClick={() => setMode('light')} children="Light Mode" />
      <button className="action-item" onClick={() => setMode('dark')} children="Dark Mode" />
      <button className="action-item" onClick={() => setMode('dim')} children="Dim Mode" />
    </div>
  );
};

export function Home() {
  return (
    <Page>
      <Page.Hero>
        <h1>Home</h1>
      </Page.Hero>
      <Page.Content>
        <ModeController />
      </Page.Content>
    </Page>
  );
}
