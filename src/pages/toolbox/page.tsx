import { useThemeCTX } from '@/store';
import { surfaceToken } from '@/common/utils';
import { Button, Page, Section, Surface } from '@/common';

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

const SurfaceDemo = () => {
  return (
    <>
      <Surface
        selector="some-class-name"
        baseConfig={{ backgroundColor: surfaceToken('primary', 0.05) }}
        hoverConfig={{ backgroundColor: surfaceToken('primary', 0.08) }}
      />
      <div
        children="Surface"
        className="some-class-name"
        style={{
          width: 300,
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </>
  );
};

export function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <Button surface="primary">Button</Button>
          <Button surface="primary">Button</Button>
          <Button surface="orange">Button</Button>
          <Button surface="yellow">Button</Button>
          <Button surface="green">Button</Button>
          <Button surface="cyan">Button</Button>
          <Button surface="blue">Button</Button>
          <Button surface="indigo">Button</Button>
          <Button surface="purple">Button</Button>
          <Button surface="violet">Button</Button>
          <Button surface="magenta">Button</Button>
          <Button surface="pink">Button</Button>
          <Button surface="red">Button</Button>
        </Section>
        <Section>
          <ModeController />
          <SurfaceDemo />
        </Section>
      </Page.Content>
    </Page>
  );
}
