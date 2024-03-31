import { Page } from '@/site/components';
import { useThemeContext } from '@/site/store';
import { useAppContext } from '@/site/store/app';
import React from 'react';

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

const DemoLoader = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useAppContext();

  React.useEffect(() => {
    dispatch({ loading: true });
    setTimeout(() => dispatch({ loading: undefined }), 2000);
  }, []);

  return <>{state.loading ? 'Loading...' : children}</>;
};

export function Home() {
  return (
    <Page>
      <Page.Hero>
        <h1>Home</h1>
      </Page.Hero>
      <Page.Content>
        <DemoLoader>
          <span>Loaded Content</span>
        </DemoLoader>
        <ModeController />
      </Page.Content>
    </Page>
  );
}
