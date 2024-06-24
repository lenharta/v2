import React from 'react';
import { Core, Theme } from '@/types';
import { Page, Hero, Section, useDispatchContext, useStateContext } from '@/app';
import {
  Action,
  ActionProps,
  ActionVariant,
  Button,
  ButtonProps,
  ButtonVariant,
  Icon,
  Title,
} from '@/core';

const CanvasHero = () => (
  <Hero>
    <Title h1>Canvas</Title>
  </Hero>
);

interface CoreOrientationMap {
  action: Core.Orientation[];
  button: Core.Orientation[];
}

const CORE_ORIENTATION_MAP: CoreOrientationMap = {
  action: ['horizontal', 'vertical'],
  button: ['horizontal', 'vertical'],
};

interface CoreVariantMap {
  action: ActionVariant[];
  button: ButtonVariant[];
}

const CORE_VARIANT_MAP: CoreVariantMap = {
  action: ['default', 'elevated', 'accent', 'accent-elevated'],
  button: ['default', 'elevated', 'accent', 'accent-elevated'],
};

interface InteractionState {
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
}

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

function useInteractionState(initialState: InteractionState = {}) {
  const [state, dispatch] = React.useState(initialState);

  const update = React.useCallback(
    (value: keyof InteractionState) => {
      dispatch({ [value]: !state[value] ? true : undefined });
    },
    [state, dispatch, initialState]
  );

  const data: (keyof InteractionState)[] = ['disabled', 'loading', 'readOnly', 'selected'];

  return {
    data,
    state,
    update,
    dispatch,
  };
}

const ButtonCanvas = (props: ButtonProps) => {
  const { state, update, data } = useInteractionState({});
  const [variant, setVariant] = React.useState(CORE_VARIANT_MAP.button[3]);

  return (
    <SandboxCanvas title="Button">
      <Button.Group gap="xs" orientation="horizontal">
        {data.map((value) => (
          <Button
            key={value}
            value={value}
            selected={state[value] === true}
            onClick={() => update(value)}
          >
            {value}
          </Button>
        ))}
      </Button.Group>

      <Button.Group>
        <Button.Group value={variant} orientation="horizontal" gap="xs">
          {CORE_VARIANT_MAP.button.map((value) => (
            <Button key={value} value={value} onClick={() => setVariant(value)}>
              {value}
            </Button>
          ))}
        </Button.Group>
      </Button.Group>

      <Button
        variant={variant}
        loading={state.loading}
        disabled={state.disabled}
        readOnly={state.readOnly}
        selected={state.selected}
        onClick={() => console.log('Button Clicked!')}
        {...props}
      >
        Button
      </Button>
    </SandboxCanvas>
  );
};

const ActionCanvas = (props: ActionProps) => {
  const { state, update, data } = useInteractionState({});
  const [variant, setVariant] = React.useState(CORE_VARIANT_MAP.action[3]);

  return (
    <SandboxCanvas title="Action">
      <Button.Group gap="xs" orientation="horizontal">
        {data.map((value) => (
          <Button
            key={value}
            value={value}
            children={value}
            selected={state[value] === true}
            onClick={() => update(value)}
          />
        ))}
      </Button.Group>

      <Button.Group>
        <Button.Group value={variant} orientation="horizontal" gap="xs">
          {CORE_VARIANT_MAP.button.map((value) => (
            <Button children={value} key={value} value={value} onClick={() => setVariant(value)} />
          ))}
        </Button.Group>
      </Button.Group>

      <Action
        label="action"
        icon={<Icon name="search" />}
        variant={variant}
        loading={state.loading}
        disabled={state.disabled}
        readOnly={state.readOnly}
        selected={state.selected}
        onClick={() => console.log('Action Clicked!')}
        {...props}
      />
    </SandboxCanvas>
  );
};

const modes: { value: Theme.Mode; label: string }[] = [
  { value: 'light', label: 'Light Mode' },
  { value: 'dark', label: 'Dark Mode' },
  { value: 'dim', label: 'Dim Mode' },
];

const accents: { value: Theme.Color; label: string }[] = [
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'mint', label: 'Mint' },
  { value: 'teal', label: 'Teal' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'blue', label: 'Blue' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'purple', label: 'Purple' },
  { value: 'pink', label: 'Pink' },
  { value: 'brown', label: 'Brown' },
];

const CanvasAccentOptions = () => {
  const store = useStateContext();
  const dispatch = useDispatchContext();

  return (
    <SandboxCanvas title="Accent Mode">
      <Button.Group value={store.accent}>
        {accents.map((item) => (
          <Button
            key={item.value}
            value={item.value}
            label="accent mode control"
            onClick={() => dispatch({ accent: item.value })}
          >
            {item.label}
          </Button>
        ))}
      </Button.Group>
    </SandboxCanvas>
  );
};

const CanvasModeOptions = () => {
  const store = useStateContext();
  const dispatch = useDispatchContext();

  return (
    <SandboxCanvas title="Theme Mode">
      <Button.Group value={store.mode}>
        {modes.map((item) => (
          <Button
            key={item.value}
            value={item.value}
            label="theme mode control"
            onClick={() => dispatch({ mode: item.value })}
          >
            {item.label}
          </Button>
        ))}
      </Button.Group>
    </SandboxCanvas>
  );
};

// const Canvas;

const CanvasRoute: React.FC<{}> = ({}) => (
  <Page>
    <CanvasHero />
    <CanvasModeOptions />
    <CanvasAccentOptions />
    <ButtonCanvas />
    <ActionCanvas />
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };
