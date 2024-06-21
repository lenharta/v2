import React from 'react';
import {
  Action,
  ActionGroupProps,
  ActionProps,
  Button,
  ButtonGroupProps,
  ButtonProps,
  Text,
  Title,
} from '@/core';
import { Page, Hero, Section } from '@/app';

const HomeHero = () => (
  <Hero>
    <Title className="v2-home-title" h1>
      <span>Frontend Engineer</span>
      <span>Human-Centered Problem Solver</span>
    </Title>
  </Hero>
);

const HomeOverview = () => (
  <Section>
    <Title>Overview</Title>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
      nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
      reiciendis fugiat, ut tenetur.
    </Text>
  </Section>
);

interface SandboxCanvasProps {
  title?: string | undefined;
  children?: React.ReactNode;
}

const SandboxCanvas = (props: SandboxCanvasProps) => {
  const { children, title = 'Sandbox Canvas' } = props;
  return (
    <Section>
      <div className="v2-sandbox-canvas">
        <div className="v2-sandbox-canvas-header">
          <Title h2>{title}</Title>
        </div>
        <div className="v2-sandbox-canvas-panel">{children}</div>
      </div>
    </Section>
  );
};

const ButtonSandboxCanvas = (props: ButtonProps) => {
  const [variant, setVariant] = React.useState<ButtonProps['variant']>('elevated');
  return (
    <SandboxCanvas title="Button">
      <Button.Group gap="xs">
        <Button onClick={() => setVariant('default')}>default</Button>
        <Button onClick={() => setVariant('elevated')}>elevated</Button>
        <Button onClick={() => setVariant('accent')}>accent</Button>
        <Button onClick={() => setVariant('accent-elevated')}>accent-elevated</Button>
      </Button.Group>
      <Button variant={variant} {...props}>
        Button
      </Button>
    </SandboxCanvas>
  );
};

const ButtonGroupSandboxCanvas = (props: ButtonGroupProps) => {
  const [flipped, setFlipped] = React.useState(false);
  const [variant, setVariant] = React.useState<ButtonProps['variant']>('elevated');
  return (
    <React.Fragment>
      <SandboxCanvas title="Button Group">
        <Button.Group gap="xs">
          <Button onClick={() => setFlipped((c) => !c)}>
            {!flipped ? 'Horizontal' : 'Vertical'}
          </Button>
          <Button onClick={() => setVariant('default')}>default</Button>
          <Button onClick={() => setVariant('elevated')}>elevated</Button>
          <Button onClick={() => setVariant('accent')}>accent</Button>
          <Button onClick={() => setVariant('accent-elevated')}>accent-elevated</Button>
        </Button.Group>

        <Button.Group
          gap="xs"
          variant={variant}
          orientation={flipped ? 'vertical' : 'horizontal'}
          {...props}
        >
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Button.Group>
      </SandboxCanvas>
    </React.Fragment>
  );
};

const ActionSandboxCanvas = (props: ActionProps) => (
  <SandboxCanvas title="Action">
    <Action {...props} label="action label" />
  </SandboxCanvas>
);

const ActionGroupSandboxCanvas = (props: ActionGroupProps) => {
  const [flipped, setFlipped] = React.useState(false);
  const [variant, setVariant] = React.useState<ButtonProps['variant']>('elevated');

  return (
    <React.Fragment>
      <SandboxCanvas title="Action Group">
        <Button.Group value={variant} gap="xs">
          <Button onClick={() => setFlipped((c) => !c)}>
            {!flipped ? 'Horizontal' : 'Vertical'}
          </Button>
          <Button onClick={() => setVariant('default')} value="default">
            default
          </Button>
          <Button onClick={() => setVariant('elevated')} value="elevated">
            elevated
          </Button>
          <Button onClick={() => setVariant('accent')} value="accent">
            accent
          </Button>
          <Button onClick={() => setVariant('accent-elevated')} value="accent-elevated">
            accent-elevated
          </Button>
        </Button.Group>

        <Action.Group
          gap="xs"
          variant={variant}
          orientation={flipped ? 'vertical' : 'horizontal'}
          {...props}
        >
          <Action label="action label" />
          <Action label="action label" />
          <Action label="action label" />
          <Action label="action label" />
          <Action label="action label" />
        </Action.Group>
      </SandboxCanvas>
    </React.Fragment>
  );
};

// const CheckGridSandbox = ({ size = 'sm', variant = 'default' }: CheckGridProps) => (
//   <CheckGrid size={size} variant={variant} />
// );

// const CheckGridStory = () => (
//   <Stack>
//     <Title>Default</Title>
//     <CheckGridSandbox />
//   </Stack>
// );

const HomeRoute: React.FC<{}> = ({}) => (
  <Page>
    <HomeHero />
    <ButtonSandboxCanvas />
    <ButtonGroupSandboxCanvas />
    <ActionSandboxCanvas />
    <ActionGroupSandboxCanvas />
  </Page>
);

HomeRoute.displayName = '@v2/Route.Home';
export { HomeRoute };
