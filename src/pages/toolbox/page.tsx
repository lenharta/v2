import { useThemeCTX } from '@/store';
import { surfaceToken } from '@/common/utils';
import { Button, Page, Section, Space, Stack, Surface, Title } from '@/common';
import { DATA_AVATAR_ICONS, DATA_COLOR_ACCENTS } from '@/data';

export const GlobalThemeControls = () => {
  const { state, setMode, setAccent, setAvatar } = useThemeCTX();
  return (
    <Section>
      <Space size="xs" />
      <Stack gap="sm">
        <Title size="xs">Theme Mode</Title>
        <div style={{ display: 'flex', width: 800, flexWrap: 'wrap', gap: 4 }}>
          <Button onClick={() => setMode('light')}>Light Mode</Button>
          <Button onClick={() => setMode('dark')}>Dark Mode</Button>
          <Button onClick={() => setMode('dim')}>Dim Mode</Button>
        </div>
        <Title size="xs">Theme Accent</Title>
        <div style={{ display: 'flex', width: 800, flexWrap: 'wrap', gap: 4 }}>
          {DATA_COLOR_ACCENTS.map((color) => (
            <Button onClick={() => setAccent(color)} surface={color} key={color}>
              {color.charAt(0).toUpperCase() + color.slice(1, color.length)}
            </Button>
          ))}
        </div>
        <Title size="xs">Theme Avatars</Title>
        <div style={{ display: 'flex', width: 800, flexWrap: 'wrap', gap: 4, flex: '0 1 100%' }}>
          {DATA_AVATAR_ICONS.map((avatar) => (
            <Button surface={state.accent} onClick={() => setAvatar(avatar)} key={avatar}>
              {avatar.charAt(0).toUpperCase() + avatar.slice(1, avatar.length)}
            </Button>
          ))}
        </div>
      </Stack>
      <Space size="xs" />
    </Section>
  );
};

const DemoSectionSurfaceBases = () => (
  <Section>
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
  </Section>
);

const DemoSectionSurfaceButtons = () => (
  <Section>
    <Space size="xs" />
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
);

const DemoSectionSpacing = () => (
  <Section>
    <Space size="xs" />
    <Space children="Spacing SM" size="sm" style={{ border: 'solid 2px red' }} />
    <Space children="Spacing MD" size="md" style={{ border: 'solid 2px red' }} />
    <Space children="Spacing LG" size="lg" style={{ border: 'solid 2px red' }} />
    <Space children="Spacing XL" size="xl" style={{ border: 'solid 2px red' }} />
  </Section>
);

export const DemoToolboxSections = () => {
  return (
    <>
      <DemoSectionSurfaceBases />
      <DemoSectionSurfaceButtons />
      <DemoSectionSpacing />
    </>
  );
};

const Sandbox = ({ children }: { children?: React.ReactNode }) => {
  return <div className="Sandbox">{children}</div>;
};

export function Toolbox() {
  return (
    <Page>
      <Page.Header />
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Sandbox></Sandbox>
      </Page.Content>
      <GlobalThemeControls />
    </Page>
  );
}
