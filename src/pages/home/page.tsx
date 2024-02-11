import * as React from 'react';
import { useThemeCTX } from '@/store';
import { Button, Page, Stack } from '@/common';
import { createSurface } from '@/common/utils';

const ModeController = () => {
  const { state, setMode } = useThemeCTX();
  return (
    <div>
      <div>CURRENT MODE: {state.mode}</div>
      <div>
        <Button
          accent={state.accent}
          // onMouseOver={() => console.log('IS HOVERED OVER')}
          // disabled={true}
          onClick={() => setMode('light')}
        >
          Light Mode
        </Button>
        <Button accent={state.accent} onClick={() => setMode('dark')}>
          Dark Mode
        </Button>
        <Button accent={state.accent} onClick={() => setMode('dim')}>
          Dim Mode
        </Button>
      </div>
    </div>
  );
};

export function Home() {
  const ref = React.useRef<HTMLDivElement>(null);

  const [hover, setHover] = React.useState(false);

  const surface = React.useCallback(
    () =>
      createSurface({
        scheme: 'primary',
        state: { hover },
        values: [
          { type: 'backgroundColor', alpha: 0.05 },
          { type: 'borderColor', alpha: 0.3 },
          { type: 'color', alpha: 1 },
        ],
      }),
    [hover]
  );

  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <Page.Container>
          <ModeController />
          <div
            children="Surface"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width: 500,
              height: 200,
              cursor: hover ? 'pointer' : 'default',
              // borderWidth: '2px',
              // borderStyle: 'solid',
              transitionDuration: 'var(--easing-duration-1)',
              transitionProperty: 'background-color, border-color, color',
              transitionTimingFunction: 'var(--easing-standard-productive)',
              ...surface(),
            }}
          />
          <Stack ref={ref}></Stack>
        </Page.Container>
      </Page.Content>
    </Page>
  );
}
