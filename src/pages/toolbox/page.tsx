import * as React from 'react';
import { useSurface } from '@/hooks';
import { STORAGE_KEYS, useStore, useStoreDispatch, useThemeCTX } from '@/store';
import { Button, Page } from '@/common';
import { deserializeJSON, generateRandomId, serializeJSON } from '@/utils';

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

const DemoSurface = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const memoSurface = React.useCallback(
    () =>
      useSurface({
        state: { hover, disabled },
        values: [
          { prop: 'backgroundColor', token: 'secondary', alpha: 0.05 },
          { prop: 'color', token: 'secondary', alpha: 0.7 },
        ],
      }),
    [hover, disabled]
  );

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setDisabled((current) => !current)}
      style={{
        width: 300,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 200ms ease',
        ...memoSurface(),
      }}
    >
      <span>DEMO SURFACE</span>
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
