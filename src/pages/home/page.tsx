import { useThemeCTX } from '@/store';
import { Button, Page } from '@/common';
import { AccentKey } from '@/types';

const ModeController = () => {
  const { state, setMode } = useThemeCTX();
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

const DATA_ACCENT_COLORS: AccentKey[] = [
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'violet',
  'magenta',
  'pink',
  'red',
];

const AccentController = () => {
  const { state, setAccent } = useThemeCTX();
  console.log(state.accent);
  return (
    <div>
      <div
        className="accent-color-swatch"
        data-accent-color-text={state.accent}
        data-int-accent-color-bkgd={state.accent}
        data-accent-color-border={state.accent}
      >
        Current Accent Color: {state.accent?.toUpperCase()}
      </div>
      <div>
        {DATA_ACCENT_COLORS.map((value) => (
          <Button key={value} data-accent-color-text={value} onClick={() => setAccent(value)}>
            Set Accent{' '}
            <span
              style={{
                color: `var(--c-text-${value})`,
                backgroundColor: `var(--c-bkgd-${value})`,
                border: 'var(--border-sm)',
                borderRadius: 'var(--radius-rd)',
                borderColor: `var(--c-border-${value})`,
                marginLeft: '8px',
                paddingInline: '10px',
                paddingBlock: '4px',
              }}
            >
              {value.toUpperCase()}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export function Home() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Home" />
      <Page.Content>
        <Page.Section>
          <Page.Container>
            <ModeController />
            <AccentController />
          </Page.Container>
        </Page.Section>
      </Page.Content>
      <Page.Footer />
    </Page>
  );
}
