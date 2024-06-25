import React from 'react';
import { capitalizeString } from '@/utils';
import { Core, Store, Theme } from '@/types';
import { Page, Hero, Section } from '@/app';
import { Action, ActionProps, ButtonProps, DividerProps, Icon, IconProps, Title } from '@/core';

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
  action: ActionProps['variant'][];
  button: ButtonProps['variant'][];
}

const CORE_VARIANT_MAP: CoreVariantMap = {
  action: ['default', 'default-elevated', 'accent', 'accent-elevated'],
  button: ['default', 'default-elevated', 'accent', 'accent-elevated'],
};

interface InteractionState {}

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

type CoreControlOption<T extends Record<string, any>, K extends keyof T> = {
  label: string;
  value: T[K];
};

type CoreControlButtonOptions = {
  size: CoreControlOption<ButtonProps, 'size'>[];
  variant: CoreControlOption<ButtonProps, 'variant'>[];
};

type CoreControlActionOptions = {
  size: CoreControlOption<ActionProps, 'size'>[];
  variant: CoreControlOption<ActionProps, 'variant'>[];
};

type CoreControlDividerOptions = {
  size: CoreControlOption<DividerProps, 'size'>[];
  variant: CoreControlOption<DividerProps, 'variant'>[];
  decoration: CoreControlOption<DividerProps, 'decoration'>[];
};

const coreControlButtonOptions = {
  variant: [
    { label: 'Default', value: 'default' },
    { label: 'Accent', value: 'accent' },
    { label: 'Default Elevated', value: 'default-elevated' },
    { label: 'Accent Elevated', value: 'accent-elevated' },
  ],
  size: [
    { label: 'X-Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'X-Large', value: 'xl' },
  ],
};

const coreControlActionOptions = {
  variant: [
    { label: 'Default', value: 'default' },
    { label: 'Accent', value: 'accent' },
    { label: 'Default Elevated', value: 'default-elevated' },
    { label: 'Accent Elevated', value: 'accent-elevated' },
  ],
  size: [
    { label: 'X-Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'X-Large', value: 'xl' },
  ],
};

const coreControlDividerOptions = {
  variant: [
    { label: 'Default', value: 'default' },
    { label: 'Accent', value: 'accent' },
  ],
  size: [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ],
  decoration: [
    { label: 'Solid', value: 'solid' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Dashed', value: 'dashed' },
  ],
};

const coreControlOptions = {
  button: coreControlButtonOptions,
  action: coreControlActionOptions,
  divider: coreControlDividerOptions,
};

type CoreInteractionState = {
  loading?: boolean | undefined;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  selected?: boolean | undefined;
};

interface CoreDividerState {
  size: DividerProps['size'];
  variant: DividerProps['variant'];
  decoration: DividerProps['decoration'];
}

interface CoreButtonState {
  size: ButtonProps['size'];
  variant: ButtonProps['variant'];
  interaction: 'enabled' | 'disabled' | 'readOnly' | 'loading' | 'selected' | undefined;
}

interface CoreActionState {
  size: ActionProps['size'];
  variant: ActionProps['variant'];
  interaction: 'enabled' | 'disabled' | 'readOnly' | 'loading' | 'selected' | undefined;
}

type CoreState = CoreActionState | CoreButtonState | CoreDividerState;

function useCoreState<T extends CoreState>(initialState: T) {
  const [state, dispatch] = React.useReducer(
    (current: T, update: Partial<T>) => ({
      ...current,
      ...update,
    }),
    initialState
  );

  return [state, dispatch] as [T, React.Dispatch<Partial<T>>];
}

// function useInteractionState(initialState: InteractionState = {}) {
//   const [state, dispatch] = React.useState(initialState);

//   const update = React.useCallback(
//     (value: keyof InteractionState) => {
//       dispatch({ [value]: !state[value] ? true : undefined });
//     },
//     [state, dispatch, initialState]
//   );

//   const data: (keyof InteractionState)[] = ['disabled', 'loading', 'readOnly', 'selected'];

//   return {
//     data,
//     state,
//     update,
//     dispatch,
//   };
// }

// const ButtonCanvas = (props: ButtonProps) => {
//   const { state, update, data } = useInteractionState({});
//   const [variant, setVariant] = React.useState(CORE_VARIANT_MAP.button[3]);

//   return (
//     <SandboxCanvas title="Button">
//       <Button.Group gap="xs" orientation="horizontal">
//         {data.map((value) => (
//           <Button
//             key={value}
//             value={value}
//             selected={state[value] === true}
//             onClick={() => update(value)}
//           >
//             {value}
//           </Button>
//         ))}
//       </Button.Group>

//       <Button.Group>
//         <Button.Group value={variant} orientation="horizontal" gap="xs">
//           {CORE_VARIANT_MAP.button.map((value) => (
//             <Button key={value} value={value} onClick={() => setVariant(value)}>
//               {value}
//             </Button>
//           ))}
//         </Button.Group>
//       </Button.Group>

//       <Button
//         variant={variant}
//         loading={state.loading}
//         disabled={state.disabled}
//         readOnly={state.readOnly}
//         selected={state.selected}
//         onClick={() => console.log('Button Clicked!')}
//         {...props}
//       >
//         Button
//       </Button>
//     </SandboxCanvas>
//   );
// };

// const ActionCanvas = (props: ActionProps) => {
//   const { state, update, data } = useInteractionState({});
//   const [variant, setVariant] = React.useState(CORE_VARIANT_MAP.action[3]);

//   return (
//     <SandboxCanvas title="Action">
//       <Button.Group gap="xs" orientation="horizontal">
//         {data.map((value) => (
//           <Button
//             key={value}
//             value={value}
//             children={value}
//             selected={state[value] === true}
//             onClick={() => update(value)}
//           />
//         ))}
//       </Button.Group>

//       <Button.Group>
//         <Button.Group value={variant} orientation="horizontal" gap="xs">
//           {CORE_VARIANT_MAP.button.map((value) => (
//             <Button children={value} key={value} value={value} onClick={() => setVariant(value)} />
//           ))}
//         </Button.Group>
//       </Button.Group>

//       <Action
//         label="action"
//         icon={<Icon name="search" />}
//         variant={variant}
//         loading={state.loading}
//         disabled={state.disabled}
//         readOnly={state.readOnly}
//         selected={state.selected}
//         onClick={() => console.log('Action Clicked!')}
//         {...props}
//       />
//     </SandboxCanvas>
//   );
// };

// const DividerCanvas = (props: DividerProps) => {
//   const [state, dispatch] = useCoreState<CoreDividerState>({
//     decoration: 'solid',
//     variant: 'default',
//     size: 'sm',
//   });

//   return (
//     <SandboxCanvas title="Divider">
//       <Button.Group value={state.size}>
//         {sizes.divider.map((item) => (
//           <Button
//             key={item.value}
//             value={item.value}
//             label={item.label}
//             onClick={() => dispatch({ size: item.value })}
//           >
//             {item.label}
//           </Button>
//         ))}
//       </Button.Group>

//       <Button.Group value={variant}>
//         {variants.divider.map((item) => (
//           <Button
//             key={item.value}
//             value={item.value}
//             label={item.label}
//             onClick={() => setVariant(item.value)}
//           >
//             {item.label}
//           </Button>
//         ))}
//       </Button.Group>
//     </SandboxCanvas>
//   );
// };

const coreModeData: { value: Theme.Mode; label: string }[] = [
  { value: 'light', label: 'Light Mode' },
  { value: 'dark', label: 'Dark Mode' },
  { value: 'dim', label: 'Dim Mode' },
];

interface ModeActionItem {
  icon: IconProps;
  value: Theme.Mode;
  label: string;
}

function getModeActionIcon(value: ModeActionItem['value']): IconProps['name'] {
  const lookup: Record<ModeActionItem['value'], IconProps['name']> = {
    light: 'mode-light',
    dark: 'mode-dark',
    dim: 'mode-dim',
  };
  return lookup[value];
}

function parseModeActionItem(value: ModeActionItem['value']): ModeActionItem {
  return {
    value,
    label: capitalizeString(value),
    icon: {
      name: getModeActionIcon(value),
    },
  };
}

const coreModeActionData: ModeActionItem[] = [
  parseModeActionItem('light'),
  parseModeActionItem('dark'),
  parseModeActionItem('dim'),
];

interface AccentActionItem {
  icon: IconProps;
  value: Theme.Color;
  label: string;
}

function parseAccentActionItem(value: AccentActionItem['value']): AccentActionItem {
  return {
    value: value,
    label: capitalizeString(value),
    icon: {
      name: 'shape-circle',
      accent: value,
    },
  };
}

const coreAccentItemData: AccentActionItem[] = [
  parseAccentActionItem('red'),
  parseAccentActionItem('orange'),
  parseAccentActionItem('yellow'),
  parseAccentActionItem('green'),
  parseAccentActionItem('mint'),
  parseAccentActionItem('teal'),
  parseAccentActionItem('cyan'),
  parseAccentActionItem('blue'),
  parseAccentActionItem('indigo'),
  parseAccentActionItem('purple'),
  parseAccentActionItem('pink'),
  parseAccentActionItem('brown'),
];

type ModeControlData = { data: ModeActionItem[] };
type ModeControlProps = Store.Props & ModeControlData;

const SandboxModeControls = ({ data, state, dispatch }: ModeControlProps) => (
  <Action.Group variant="default-elevated" value={state.accent}>
    {data.map((item) => (
      <Action
        key={item.value}
        value={item.value}
        label={item.label}
        icon={<Icon {...item.icon} type={state.icons} />}
        onClick={() => dispatch({ mode: item.value })}
      />
    ))}
  </Action.Group>
);

type AccentControlData = { data: AccentActionItem[] };
type AccentControlProps = Store.Props & AccentControlData;

const SandboxAccentControls = ({ data, state, dispatch }: AccentControlProps) => (
  <Action.Group variant="default-elevated" value={state.accent}>
    {data.map((item) => (
      <Action
        key={item.value}
        value={item.value}
        label={item.label}
        icon={<Icon {...item.icon} type={state.icons} />}
        onClick={() => dispatch({ accent: item.value })}
      />
    ))}
  </Action.Group>
);

// const CanvasAccentOptions = () => {
//   const store = useStateContext();
//   const dispatch = useDispatchContext();

//   return (
//     <SandboxCanvas title="Accent Mode">
//       <Button.Group value={store.accent}>
//         {coreAccentData.map((item) => (
//           <Button
//             key={item.value}
//             value={item.value}
//             label="accent mode control"
//             onClick={() => dispatch({ accent: item.value })}
//           >
//             {item.label}
//           </Button>
//         ))}
//       </Button.Group>
//     </SandboxCanvas>
//   );
// };

// const CanvasModeOptions = () => {
//   const store = useStateContext();
//   const dispatch = useDispatchContext();
//   return (
//     <SandboxCanvas title="Theme Mode">
//       <Button.Group value={store.mode}>
//         {coreModeData.map((item) => (
//           <Button
//             key={item.value}
//             value={item.value}
//             label="theme mode control"
//             onClick={() => dispatch({ mode: item.value })}
//           >
//             {item.label}
//           </Button>
//         ))}
//       </Button.Group>
//     </SandboxCanvas>
//   );
// };

// const Canvas;

const CanvasRoute: React.FC<{}> = ({}) => (
  <Page>
    <CanvasHero />
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };
