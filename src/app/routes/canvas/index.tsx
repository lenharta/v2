import { Title } from '@/core';
import { Page, Hero } from '@/app';

const CanvasHero = () => (
  <Hero>
    <Title h1>Canvas</Title>
  </Hero>
);

const CanvasRoute: React.FC<{}> = ({}) => (
  <Page>
    <CanvasHero />
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };

// interface CoreOrientationMap {
//   action: Core.Orientation[];
//   button: Core.Orientation[];
// }

// const CORE_ORIENTATION_MAP: CoreOrientationMap = {
//   action: ['horizontal', 'vertical'],
//   button: ['horizontal', 'vertical'],
// };

// interface CoreVariantMap {
//   action: ActionProps['variant'][];
//   // button: ButtonProps['variant'][];
// }

// const CORE_VARIANT_MAP: CoreVariantMap = {
//   action: ['base-default', 'base-elevated', 'accent-default', 'accent-elevated'],
//   // button: ['base-default', 'base-elevated', 'accent-default', 'accent-elevated'],
// };

// interface InteractionState {}

// interface SandboxCanvasProps {
//   title?: string | undefined;
//   children?: React.ReactNode;
// }

// const SandboxCanvas = (props: SandboxCanvasProps) => {
//   const { children, title = 'Sandbox Canvas' } = props;
//   return (
//     <Section>
//       <div className="v2-sandbox-canvas">
//         <div className="v2-sandbox-canvas-header">
//           <Title h2>{title}</Title>
//         </div>
//         <div className="v2-sandbox-canvas-panel">{children}</div>
//       </div>
//     </Section>
//   );
// };

// type CoreControlOption<T extends Record<string, any>, K extends keyof T> = {
//   label: string;
//   value: T[K];
// };

// type CoreControlButtonOptions = {
//   size: CoreControlOption<ButtonProps, 'size'>[];
//   variant: CoreControlOption<ButtonProps, 'variant'>[];
// };

// type CoreControlActionOptions = {
//   size: CoreControlOption<ActionProps, 'size'>[];
//   variant: CoreControlOption<ActionProps, 'variant'>[];
// };

// type CoreControlDividerOptions = {
//   size: CoreControlOption<DividerProps, 'size'>[];
//   variant: CoreControlOption<DividerProps, 'variant'>[];
//   decoration: CoreControlOption<DividerProps, 'decoration'>[];
// };

// const coreControlButtonOptions = {
//   variant: [
//     { label: 'Default', value: 'default' },
//     { label: 'Accent', value: 'accent' },
//     { label: 'Default Elevated', value: 'default-elevated' },
//     { label: 'Accent Elevated', value: 'accent-elevated' },
//   ],
//   size: [
//     { label: 'X-Small', value: 'xs' },
//     { label: 'Small', value: 'sm' },
//     { label: 'Medium', value: 'md' },
//     { label: 'Large', value: 'lg' },
//     { label: 'X-Large', value: 'xl' },
//   ],
// };

// const coreControlActionOptions = {
//   variant: [
//     { label: 'Base Default', value: 'base-default' },
//     { label: 'Base Elevated', value: 'base-elevated' },
//     { label: 'Accent Default', value: 'accent-default' },
//     { label: 'Accent Elevated', value: 'accent-elevated' },
//   ],
//   size: [
//     { label: 'X-Small', value: 'xs' },
//     { label: 'Small', value: 'sm' },
//     { label: 'Medium', value: 'md' },
//     { label: 'Large', value: 'lg' },
//     { label: 'X-Large', value: 'xl' },
//   ],
// };

// const coreControlDividerOptions = {
//   variant: [
//     { label: 'Default', value: 'default' },
//     { label: 'Accent', value: 'accent' },
//   ],
//   size: [
//     { label: 'Small', value: 'sm' },
//     { label: 'Medium', value: 'md' },
//     { label: 'Large', value: 'lg' },
//   ],
//   decoration: [
//     { label: 'Solid', value: 'solid' },
//     { label: 'Dotted', value: 'dotted' },
//     { label: 'Dashed', value: 'dashed' },
//   ],
// };

// const coreControlIconButtonOptions = {
//   variant: [
//     { label: 'Default', value: 'default' },
//     { label: 'Accent', value: 'accent' },
//     { label: 'Default Elevated', value: 'default-elevated' },
//     { label: 'Accent Elevated', value: 'accent-elevated' },
//   ],
//   size: [
//     { label: 'XX-Small', value: 'xxs' },
//     { label: 'X-Small', value: 'xs' },
//     { label: 'Small', value: 'sm' },
//     { label: 'Medium', value: 'md' },
//     { label: 'Large', value: 'lg' },
//     { label: 'X-Large', value: 'xl' },
//     { label: 'XX-Large', value: 'xxl' },
//   ],
//   radius: [
//     { label: 'X-Small', value: 'xs' },
//     { label: 'Small', value: 'sm' },
//     { label: 'Medium', value: 'md' },
//     { label: 'Large', value: 'lg' },
//     { label: 'X-Large', value: 'xl' },
//     { label: 'Round', value: 'rd' },
//   ],
// };

// const coreControlOptions = {
//   button: coreControlButtonOptions,
//   action: coreControlActionOptions,
//   divider: coreControlDividerOptions,
// };

// type CoreInteractionState = {
//   loading?: boolean | undefined;
//   disabled?: boolean | undefined;
//   readOnly?: boolean | undefined;
//   selected?: boolean | undefined;
// };

// interface CoreDividerState {
//   size: DividerProps['size'];
//   variant: DividerProps['variant'];
//   decoration: DividerProps['decoration'];
// }

// interface CoreButtonState {
//   size: ButtonProps['size'];
//   variant: ButtonProps['variant'];
//   interaction: 'enabled' | 'disabled' | 'readOnly' | 'loading' | 'selected' | undefined;
// }

// interface CoreActionState {
//   size: ActionProps['size'];
//   variant: ActionProps['variant'];
//   interaction: 'enabled' | 'disabled' | 'readOnly' | 'loading' | 'selected' | undefined;
// }

// type CoreState = CoreActionState | CoreButtonState | CoreDividerState;

// function useCoreState<T extends CoreState>(initialState: T) {
//   const [state, dispatch] = React.useReducer(
//     (current: T, update: Partial<T>) => ({
//       ...current,
//       ...update,
//     }),
//     initialState
//   );

//   return [state, dispatch] as [T, React.Dispatch<Partial<T>>];
// }

// const CanvasSelect = () => {
//   const [isOpen, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState<string>();
//   return (
//     <SandboxCanvas title="Select">
//       <Select
//         value={value}
//         isOpen={isOpen}
//         onChange={setValue}
//         onOpenChange={setOpen}
//         data={[
//           {
//             label: 'Option 1',
//             value: 'option-1',
//           },
//           {
//             label: 'Option 2',
//             value: 'option-2',
//           },
//           {
//             label: 'Option 3',
//             value: 'option-3',
//           },
//           {
//             label: 'Option 4',
//             value: 'option-4',
//           },
//         ]}
//       />
//     </SandboxCanvas>
//   );
// };

// interface IconButtonCanvasState {
//   size?: IconButtonProps['size'] | undefined;
//   radius?: IconButtonProps['radius'] | undefined;
//   variant?: IconButtonProps['variant'] | undefined;
//   disabled?: boolean | undefined;
//   readOnly?: boolean | undefined;
//   selected?: boolean | undefined;
// }

// type CanvasReducer<T> = React.Reducer<T, Partial<T>>;

// type IconButtonCanvasReducer = CanvasReducer<IconButtonCanvasState>;

// interface CanvasControlGroupProps<T extends Record<string, any>> {
//   state: T[keyof T] | undefined;
//   dispatch: React.Dispatch<Partial<T>>;
//   variant?: ButtonProps['variant'] | undefined;
//   name: keyof T;
//   data: {
//     value: T[keyof T];
//     label: string;
//     disabled?: boolean | undefined;
//     readOnly?: boolean | undefined;
//   }[];
// }

// function CanvasControlGroup<T extends Record<string, any>>(props: CanvasControlGroupProps<T>) {
//   const { state, dispatch, variant = 'default-elevated', name, data } = props;
//   return (
//     <Button.Group value={state} gap="xs">
//       {data.map((item) => (
//         <Button
//           key={item.value}
//           value={item.value}
//           label={item.label}
//           variant={variant}
//           disabled={item.disabled}
//           readOnly={item.readOnly}
//           selected={item.value === state}
//           onClick={() => dispatch({ [name]: item.value } as Partial<T>)}
//           onDoubleClick={() => dispatch({ [name]: undefined } as Partial<T>)}
//         >
//           {item.label}
//         </Button>
//       ))}
//     </Button.Group>
//   );
// }

// type CanvasStore<T> = React.Reducer<T, Partial<T>>;

// function useCanvasStore<T extends Record<string, any>>(
//   initialStore: T
// ): [T, React.Dispatch<Partial<T>>] {
//   return React.useReducer<CanvasStore<T>>(
//     (state, update) => ({
//       ...state,
//       ...update,
//     }),
//     initialStore
//   );
// }

// const CanvasControlColorContrast = () => {
//   const dispatch = useDispatchContext();
//   const state = useStateContext();

//   return (
//     <SandboxCanvas title="Global Theme | Color Contrast">
//       <Button.Group gap="xs" variant="default-elevated">
//         <Button
//           label="global colors default"
//           onClick={() => dispatch({ contrast: 'no' })}
//           selected={state.contrast === 'no' ? true : undefined}
//         >
//           Default
//         </Button>

//         <Button
//           label="global colors accessible"
//           onClick={() => dispatch({ contrast: 'yes' })}
//           selected={state.contrast === 'yes' ? true : undefined}
//         >
//           Accessible
//         </Button>
//       </Button.Group>
//     </SandboxCanvas>
//   );
// };

// interface CanvasButtonStore {
//   size?: ButtonProps['size'] | undefined;
//   variant?: ButtonProps['variant'] | undefined;
// }

// const CanvasButton = () => {
//   const [state, dispatch] = useCanvasStore<CanvasButtonStore>({
//     variant: 'accent-elevated',
//     size: 'md',
//   });

//   return (
//     <SandboxCanvas title="Button">
//       <CanvasControlGroup
//         name="size"
//         state={state.size}
//         dispatch={dispatch}
//         data={[
//           { label: 'X-Small', value: 'xs' },
//           { label: 'Small', value: 'sm' },
//           { label: 'Medium', value: 'md' },
//           { label: 'Large', value: 'lg' },
//           { label: 'X-Large', value: 'xl' },
//         ]}
//       />

//       <CanvasControlGroup
//         name="variant"
//         state={state.variant}
//         dispatch={dispatch}
//         data={[
//           { label: 'Default', value: 'default' },
//           { label: 'Accent', value: 'accent' },
//           { label: 'Default Elevated', value: 'default-elevated' },
//           { label: 'Accent Elevated', value: 'accent-elevated' },
//         ]}
//       />

//       <Button label="canvas button" {...state}>
//         Button
//       </Button>
//     </SandboxCanvas>
//   );
// };

// interface CanvasActionStore {
//   size?: ActionProps['size'] | undefined;
//   variant?: ActionProps['variant'] | undefined;
// }

// const CanvasAction = () => {
//   const [state, dispatch] = useCanvasStore<CanvasActionStore>({
//     variant: 'accent-elevated',
//     size: 'md',
//   });

//   return (
//     <SandboxCanvas title="Action">
//       <CanvasControlGroup
//         name="size"
//         state={state.size}
//         dispatch={dispatch}
//         data={[
//           { label: 'X-Small', value: 'xs' },
//           { label: 'Small', value: 'sm' },
//           { label: 'Medium', value: 'md' },
//           { label: 'Large', value: 'lg' },
//           { label: 'X-Large', value: 'xl' },
//         ]}
//       />

//       <CanvasControlGroup
//         name="variant"
//         state={state.variant}
//         dispatch={dispatch}
//         data={[
//           { label: 'Base Default', value: 'base-default' },
//           { label: 'Base Elevated', value: 'base-elevated' },
//           { label: 'Accent Default', value: 'accent-default' },
//           { label: 'Accent Elevated', value: 'accent-elevated' },
//         ]}
//       />

//       <Action icon={<Icon name="search" />} label="canvas action" {...state} />
//     </SandboxCanvas>
//   );
// };

// interface InlineInputStore {
//   size?: InlineInputProps['size'] | undefined;
//   variant?: InlineInputProps['variant'] | undefined;
//   selected?: boolean | undefined;
//   disabled?: boolean | undefined;
//   readOnly?: boolean | undefined;
// }

// const CanvasInlineInput = () => {
//   const [state, dispatch] = useCanvasStore<InlineInputStore>({});

//   return (
//     <SandboxCanvas title="InlineInput">
//       <Button.Group>
//         <Button
//           selected={state.selected}
//           variant="default-elevated"
//           onClick={() => dispatch({ selected: !state.selected ? true : undefined })}
//           children="Selected"
//         />
//         <Button
//           selected={state.readOnly}
//           variant="default-elevated"
//           onClick={() => dispatch({ readOnly: !state.readOnly ? true : undefined })}
//           children="ReadOnly"
//         />
//         <Button
//           selected={state.disabled}
//           variant="default-elevated"
//           onClick={() => dispatch({ disabled: !state.disabled ? true : undefined })}
//           children="Disabled"
//         />
//       </Button.Group>

//       <CanvasControlGroup
//         name="size"
//         state={state.size}
//         dispatch={dispatch}
//         data={[
//           { label: 'X-Small', value: 'xs' },
//           { label: 'Small', value: 'sm' },
//           { label: 'Medium', value: 'md' },
//           { label: 'Large', value: 'lg' },
//           { label: 'X-Large', value: 'xl' },
//         ]}
//       />

//       <CanvasControlGroup
//         name="variant"
//         state={state.variant}
//         dispatch={dispatch}
//         data={[
//           { label: 'Default', value: 'default' },
//           { label: 'Accent', value: 'accent' },
//           { label: 'Default Elevated', value: 'default-elevated' },
//           { label: 'Accent Elevated', value: 'accent-elevated' },
//         ]}
//       />

//       <InlineInput
//         label="Input Label"
//         error="This is an input error message."
//         message="Some input message here."
//         size={state.size}
//         variant={state.variant}
//         checked={state.selected}
//         readOnly={state.readOnly}
//         disabled={state.disabled}
//       >
//         <Icon name="checkbox-mixed-square" />
//       </InlineInput>
//     </SandboxCanvas>
//   );
// };

// const systemGrayColorsDark: SystemGrayOptions[] = [
//   { level: '01', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '02', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '03', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '04', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '05', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '06', type: 'default', mode: 'dark', alpha: 1 },
//   { level: '01', type: 'accessible', mode: 'dark', alpha: 1 },
//   { level: '02', type: 'accessible', mode: 'dark', alpha: 1 },
//   { level: '03', type: 'accessible', mode: 'dark', alpha: 1 },
//   { level: '04', type: 'accessible', mode: 'dark', alpha: 1 },
//   { level: '05', type: 'accessible', mode: 'dark', alpha: 1 },
//   { level: '06', type: 'accessible', mode: 'dark', alpha: 1 },
// ];

// const systemGrayColorsLight: SystemGrayOptions[] = [
//   { level: '01', type: 'default', mode: 'light', alpha: 1 },
//   { level: '02', type: 'default', mode: 'light', alpha: 1 },
//   { level: '03', type: 'default', mode: 'light', alpha: 1 },
//   { level: '04', type: 'default', mode: 'light', alpha: 1 },
//   { level: '05', type: 'default', mode: 'light', alpha: 1 },
//   { level: '06', type: 'default', mode: 'light', alpha: 1 },
//   { level: '01', type: 'accessible', mode: 'light', alpha: 1 },
//   { level: '02', type: 'accessible', mode: 'light', alpha: 1 },
//   { level: '03', type: 'accessible', mode: 'light', alpha: 1 },
//   { level: '04', type: 'accessible', mode: 'light', alpha: 1 },
//   { level: '05', type: 'accessible', mode: 'light', alpha: 1 },
//   { level: '06', type: 'accessible', mode: 'light', alpha: 1 },
// ];

// interface SystemGrayOptions {
//   mode?: 'light' | 'dark' | undefined;
//   type?: 'default' | 'accessible' | undefined;
//   level?: '01' | '02' | '03' | '04' | '05' | '06' | undefined;
//   alpha?: number | undefined;
// }

// function createSystemGrayToken(opts: SystemGrayOptions) {
//   const { level = '01', type = 'default', mode = 'dark', alpha = 1 } = opts;
//   return `rgba(var(--c-rgb-gray-${level}-${type}-${mode}), ${alpha})`;
// }

// interface SystemGraySwatchProps extends SystemGrayOptions {
//   label: string;
// }

// function SystemGraySwatch(props: SystemGraySwatchProps) {
//   const { label, alpha, level, mode, type } = props;

//   const style = {
//     color: `hsla(0, 0%, ${mode === 'dark' ? '99%' : '0%'}, 0.87)`,
//     backgroundColor: createSystemGrayToken({ level, type, mode, alpha }),
//   };

//   return (
//     <div className="v2-sandbox-canvas-swatch" style={style}>
//       <div className="v2-sandbox-canvas-swatch-label">{label}</div>
//     </div>
//   );
// }

// const CanvasGraySwatchesDark = () => {
//   return (
//     <SandboxCanvas title="System Gray Colors">
//       {systemGrayColorsDark.map((item) => {
//         const token = ['gray', item.level, item.type, item.mode].join('-');
//         return <SystemGraySwatch key={token} label={token} {...item} />;
//       })}
//     </SandboxCanvas>
//   );
// };

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

// const coreModeData: { value: Theme.Mode; label: string }[] = [
//   { value: 'light', label: 'Light Mode' },
//   { value: 'dark', label: 'Dark Mode' },
//   { value: 'dim', label: 'Dim Mode' },
// ];

// interface ModeActionItem {
//   icon: IconProps;
//   value: Theme.Mode;
//   label: string;
// }

// function getModeActionIcon(value: ModeActionItem['value']): IconProps['name'] {
//   const lookup: Record<ModeActionItem['value'], IconProps['name']> = {
//     light: 'mode-light',
//     dark: 'mode-dark',
//     dim: 'mode-dim',
//   };
//   return lookup[value];
// }

// function parseModeActionItem(value: ModeActionItem['value']): ModeActionItem {
//   return {
//     value,
//     label: capitalizeString(value),
//     icon: {
//       name: getModeActionIcon(value),
//     },
//   };
// }

// const coreModeActionData: ModeActionItem[] = [
//   parseModeActionItem('light'),
//   parseModeActionItem('dark'),
//   parseModeActionItem('dim'),
// ];

// interface AccentActionItem {
//   icon: IconProps;
//   value: Theme.Color;
//   label: string;
// }

// function parseAccentActionItem(value: AccentActionItem['value']): AccentActionItem {
//   return {
//     value: value,
//     label: capitalizeString(value),
//     icon: {
//       name: 'shape-circle',
//       accent: value,
//     },
//   };
// }

// const coreAccentItemData: AccentActionItem[] = [
//   parseAccentActionItem('red'),
//   parseAccentActionItem('orange'),
//   parseAccentActionItem('yellow'),
//   parseAccentActionItem('green'),
//   parseAccentActionItem('mint'),
//   parseAccentActionItem('teal'),
//   parseAccentActionItem('cyan'),
//   parseAccentActionItem('blue'),
//   parseAccentActionItem('indigo'),
//   parseAccentActionItem('purple'),
//   parseAccentActionItem('pink'),
//   parseAccentActionItem('brown'),
// ];

// type ModeControlData = { data: ModeActionItem[] };
// type ModeControlProps = Store.Props & ModeControlData;

// const SandboxModeControls = ({ data, state, dispatch }: ModeControlProps) => (
//   <Action.Group variant="base-default" value={state.accent}>
//     {data.map((item) => (
//       <Action
//         key={item.value}
//         value={item.value}
//         label={item.label}
//         icon={<Icon {...item.icon} type={state.icons} />}
//         onClick={() => dispatch({ mode: item.value })}
//       />
//     ))}
//   </Action.Group>
// );

// type AccentControlData = { data: AccentActionItem[] };
// type AccentControlProps = Store.Props & AccentControlData;

// const SandboxAccentControls = ({ data, state, dispatch }: AccentControlProps) => (
//   <Action.Group variant="base-default" value={state.accent}>
//     {data.map((item) => (
//       <Action
//         key={item.value}
//         value={item.value}
//         label={item.label}
//         icon={<Icon {...item.icon} type={state.icons} />}
//         onClick={() => dispatch({ accent: item.value })}
//       />
//     ))}
//   </Action.Group>
// );

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
