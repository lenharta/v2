import React from 'react';
import { Core, Store, Theme } from '@/types';
import { Action, Icon, IconProps } from '@/core';
import { SideMenuProps } from './SideMenu.types';
import { SideMenuSelect } from './SideMenuSelect';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatchContext, useStateContext } from '@/app/store';
import { objectKeys } from '@/utils';

type SideMenuFactory = React.FC<SideMenuProps> & {
  Select: typeof SideMenuSelect;
};

const data: Core.LinkItem[] = [
  { value: '/experience', label: 'navigate to experience', icon: 'briefcase' },
  { value: '/projects', label: 'navigate to projects', icon: 'easel' },
  { value: '/toolbox', label: 'navigate to toolbox', icon: 'layers' },
  { value: '/sandbox', label: 'navigate to sandbox', icon: 'box' },
  { value: '/settings', label: 'navigate to settings', icon: 'gear' },
];

const MODE_ICON_PROPS_MAP: Record<Theme.Mode, IconProps> = {
  light: { name: 'mode-light' },
  dark: { name: 'mode-dark' },
  dim: { name: 'mode-dim' },
};
// style: { fill: 'hsla(var(--c-hue-orange), 0.9)' } },

const getTokenColorHSLA = (accent: Theme.Color, alpha: number = 0.9) => {
  return `hsla(var(--c-hue-${accent}), ${alpha})`;
};

const getTokenStyleHSLA = (accent: Theme.Color, alpha: number = 0.9): React.CSSProperties => {
  return { fill: getTokenColorHSLA(accent, alpha) };
};

const TOKEN_DATA: {
  dir: Theme.Dir[];
  mode: Theme.Mode[];
  accent: Theme.Color[];
} = {
  dir: ['ltr', 'rtl'],
  mode: ['light', 'dark', 'dim'],
  accent: [
    'red',
    'orange',
    'yellow',
    'green',
    'mint',
    'teal',
    'cyan',
    'blue',
    'indigo',
    'purple',
    'pink',
    'brown',
  ],
};

interface SideMenuPanelState {
  dir: boolean;
  mode: boolean;
  accent: boolean;
}

const SideMenu: SideMenuFactory = (props) => {
  const { ...forwardedProps } = props;

  const state = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatchContext();

  const [panels, setPanels] = React.useState<SideMenuPanelState>({
    accent: false,
    mode: false,
    dir: false,
  });

  const clearPanels = () => {
    setPanels({ accent: false, mode: false, dir: false });
  };

  const handleOpen = () => {
    dispatch({ sideOpen: true });
    dispatch({ menuOpen: undefined, searchOpen: undefined });
  };

  const handleClose = () => {
    dispatch({ sideOpen: undefined });
    clearPanels();
  };

  return (
    <div className="v2-sidemenu" {...forwardedProps}>
      <div className="v2-sidemenu-inner">
        <Action.Group orientation="vertical" value={location.pathname}>
          {data.map((item) => (
            <Action
              onClick={(event) => navigate(event.currentTarget.value)}
              label={item.label}
              value={item.value}
              icon={<Icon name={item.icon} type={state.icons} />}
              key={item.value}
            />
          ))}

          <Action.Spacer grow />

          <SideMenu.Select
            label="select accent"
            value={state.accent}
            isOpen={panels.accent}
            onOpen={handleOpen}
            onClose={handleClose}
            onOpenChange={() => setPanels((c) => ({ ...c, accent: true }))}
            onOptionChange={(value) => {
              dispatch({ accent: value as any });
              clearPanels();
            }}
            icon={<Icon type="fill" accent={state.accent} />}
            items={TOKEN_DATA.accent.map((k) => ({
              icon: <Icon name="shape-circle" type="fill" accent={k} />,
              label: `set accent color ${k}`,
              value: k,
            }))}
          />

          <SideMenu.Select
            icon={<Icon name={`mode-${state.mode}`} type={state.icons} />}
            label="select mode"
            value={state.mode}
            isOpen={panels.mode}
            onOpen={handleOpen}
            onClose={handleClose}
            onOpenChange={() => setPanels((c) => ({ ...c, mode: true }))}
            onOptionChange={(value) => {
              dispatch({ mode: value as any });
              clearPanels();
            }}
            items={TOKEN_DATA.mode.map((v) => ({
              icon: <Icon name={`mode-${v}`} type={state.icons} />,
              label: `set ${v} mode`,
              value: v,
            }))}
          />

          <SideMenu.Select
            icon={<Icon name={state.dir} type={state.icons} />}
            label="select text direction"
            value={state.dir}
            isOpen={panels.dir}
            onOpen={handleOpen}
            onClose={handleClose}
            onOpenChange={() => setPanels((c) => ({ ...c, dir: true }))}
            onOptionChange={(value) => {
              dispatch({ dir: value as any });
              clearPanels();
            }}
            items={TOKEN_DATA.dir.map((v) => ({
              icon: <Icon name={v} type={state.icons} />,
              label: `set text direction ${v === 'rtl' ? 'right to left' : 'left to right'}`,
              value: v,
            }))}
          />

          <Action.Spacer />
        </Action.Group>
      </div>
    </div>
  );
};

SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
