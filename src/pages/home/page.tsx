import * as React from 'react';
import { useThemeCTX } from '@/store';
import { Button, Page, Stack } from '@/common';
import { AccentKey, AvatarKey } from '@/types';

const ModeController = () => {
  const { state, setMode } = useThemeCTX();
  return (
    <div>
      <div>CURRENT MODE: {state.mode}</div>
      <div>
        <Button
          accent={state.accent}
          onMouseOver={() => console.log('IS HOVERED OVER')}
          disabled={true}
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

const DATA_AVATAR_ICONS: AvatarKey[] = [
  'baseball',
  'basketball',
  'beer',
  'bolt',
  'code',
  'coffee',
  'dog',
  'film',
  'football',
  'heart',
  'music',
  'palette',
  'person',
  'pizza',
  'puzzle',
  'robot',
  'shield',
  'smiley',
  'soccer',
  'star',
  'trophy',
];

// const findAlphaValue = (alpha?: number, hover?: boolean) => {
//   if (alpha && !hover) {
//     return alpha;
//   }
//   if (alpha && hover) {
//     return alpha + 0.1;
//   }
//   return 1;
// };

// const createTokenHSL = (accent?: AccentKey, alpha?: number, hover?: boolean) => {
//   return `hsl(var(--c-hsl-${accent}), ${findAlphaValue(alpha, hover)})`;
// };

// type DemoThemeProps = {
//   data: AccentKey[] | AvatarKey[];
//   type?: keyof ThemeContextValue['state'];
// };

// const ThemeDemoControl = (props: DemoThemeProps) => {
//   const { data, type = 'accent' } = props;
//   const { state, setAccent, setAvatar } = useThemeCTX();
//   const [hovered, setHovered] = React.useState(false);
//   const [hoverIndex, setHoverIndex] = React.useState<string | null>(null);

//   const title = type === 'accent' ? 'Accent' : 'Avatar';
//   const handler = type === 'accent' ? setAccent : setAvatar;
//   const _value = (v: string) => (type === 'accent' ? v : state.accent);

//   return (
//     <div>
//       <div
//         className="accent-color-swatch"
//         children={`Current ${title}: ${state.accent?.toUpperCase()}`}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           color: createTokenHSL(state.accent, 1),
//           borderColor: createTokenHSL(state.accent, 0.6),
//           backgroundColor: createTokenHSL(state.accent, 0.15, hovered),
//         }}
//       />
//       <div>
//         {data.map((value) => (
//           <Button
//             key={value}
//             onClick={() => handler(value as any)}
//             children={type === 'accent' ? null : value.toUpperCase()}
//             className={`accent-color-swatch-button-${type}`}
//             onMouseEnter={() => setHoverIndex(value)}
//             onMouseLeave={() => setHoverIndex(null)}
//             style={{
//               color: createTokenHSL(_value(value) as AccentKey, 1),
//               borderColor: createTokenHSL(_value(value) as AccentKey, 0.6),
//               backgroundColor: createTokenHSL(
//                 _value(value) as AccentKey,
//                 0.15,
//                 value === hoverIndex
//               ),
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export function Home() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <Page>
      <Page.Hero title="Home" />
      <Page.Content>
        <Page.Container>
          <ModeController />
          {/* <ThemeDemoControl data={DATA_ACCENT_COLORS} type="accent" /> */}
          {/* <ThemeDemoControl data={DATA_AVATAR_ICONS} type="avatar" /> */}
          <Stack ref={ref}></Stack>
        </Page.Container>
      </Page.Content>
    </Page>
  );
}
