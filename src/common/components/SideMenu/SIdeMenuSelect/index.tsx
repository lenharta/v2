import React from 'react';
import { Store, Theme } from '@/types';
import { Action, Floating, Icon, IconProps } from '@/core';

type SideMenuSelectFactory = React.FC<{
  name: keyof Store.State;
  store: Store.State;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  dispatch: (store: Partial<Store.State>) => void;
  data: {
    value: string;
    label: string;
    icon?: IconProps['name'] | undefined;
  }[];
}> & {};

type StoreIconProps = { variant: IconProps['variant'] };

const ICON_MAP_STORE_DIR: Record<
  Theme.Dir,
  { icon: IconProps['name']; color?: string | undefined }
> = {
  rtl: { icon: 'text-right' },
  ltr: { icon: 'text-left' },
};

const ICON_MAP_STORE_MODE: Record<
  Theme.Mode,
  { icon: IconProps['name']; color?: string | undefined }
> = {
  light: { icon: 'mode-light' },
  dark: { icon: 'mode-dark' },
  dim: { icon: 'mode-dim' },
};

const ICON_MAP_STORE_ACCENT: Record<Theme.Color, { icon: IconProps['name']; color: string }> = {
  red: { icon: 'shape-circle', color: 'var(--c-red)' },
  orange: { icon: 'shape-circle', color: 'var(--c-orange)' },
  yellow: { icon: 'shape-circle', color: 'var(--c-yellow)' },
  green: { icon: 'shape-circle', color: 'var(--c-green)' },
  mint: { icon: 'shape-circle', color: 'var(--c-mint)' },
  teal: { icon: 'shape-circle', color: 'var(--c-teal)' },
  cyan: { icon: 'shape-circle', color: 'var(--c-cyan)' },
  blue: { icon: 'shape-circle', color: 'var(--c-blue)' },
  indigo: { icon: 'shape-circle', color: 'var(--c-indigo)' },
  purple: { icon: 'shape-circle', color: 'var(--c-purple)' },
  pink: { icon: 'shape-circle', color: 'var(--c-pink)' },
  brown: { icon: 'shape-circle', color: 'var(--c-brown)' },
};

const ICON_MAP_STORE:
  | Record<'dir', Record<Theme.Dir, { icon: IconProps['name'] }>>
  | Record<'mode', Record<Theme.Mode, { icon: IconProps['name'] }>>
  | Record<'accent', Record<Theme.Color, { icon: IconProps['name']; color: string }>> = {
  accent: ICON_MAP_STORE_ACCENT,
  mode: ICON_MAP_STORE_MODE,
  dir: ICON_MAP_STORE_DIR,
};

const StoreIconDir = (props: { value: Store.State['dir'] } & StoreIconProps) => {
  return <Icon name={ICON_MAP_STORE_DIR[props.value].icon} variant={props.variant} />;
};

const StoreIconMode = (props: { value: Store.State['mode'] } & StoreIconProps) => {
  return (
    <Icon
      name={ICON_MAP_STORE_MODE[props.value].icon}
      variant={props.variant}
      style={{
        fill: ICON_MAP_STORE_MODE[props.value].color,
      }}
    />
  );
};

const StoreIconAccent = (props: { value: Store.State['accent'] }) => {
  return (
    <Icon
      name={ICON_MAP_STORE_ACCENT[props.value].icon}
      variant="fill"
      style={{
        fill: ICON_MAP_STORE_ACCENT[props.value].color,
      }}
    />
  );
};

const SideMenuStoreIcon = <T extends Store.State, K extends keyof T>(
  props: { name: K; value: T[K] } & StoreIconProps
) => {
  const { name, value, ...forwardedProps } = props;
  switch (name) {
    case 'accent':
      return <StoreIconAccent value={value as T['accent']} />;
    case 'mode':
      return <StoreIconMode value={value as T['mode']} {...forwardedProps} />;
    case 'dir':
      return <StoreIconDir value={value as T['dir']} {...forwardedProps} />;
    default:
      return null;
  }
};

const css = {
  drawer: 'v2-sidemenu-drawer',
};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const {
    store,
    isOpen,
    setOpen,
    dispatch,
    name = 'mode',
    data = [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
      { label: 'Dim', value: 'dim' },
    ],
  } = props;

  return (
    <React.Fragment>
      <Floating isOpen={isOpen} onChange={setOpen} placement="right-start">
        <Floating.Target>
          <Action
            data-sidemenu-action-item
            icon={<SideMenuStoreIcon name={name} value={store[name]} variant={store.icons} />}
            selected={isOpen}
            variant="elevated"
            scheme="primary-1-interactive"
            label="mode"
          />
        </Floating.Target>

        <Floating.Box>
          <Action.Group
            data-sidemenu-action-drawer
            parentSelector="[data-sidemenu-action-drawer]"
            childSelector="[data-sidemenu-action-option]"
            className={css.drawer}
            variant="elevated"
            scheme="primary-1-interactive"
          >
            {data.map((item) => (
              <Action
                data-sidemenu-action-option
                icon={<SideMenuStoreIcon name={name} value={item.value} variant={store.icons} />}
                selected={item.value === store[name] || undefined}
                onClick={() => dispatch({ [name]: item.value })}
                label={item.label}
                value={item.value}
                key={item.value}
              />
            ))}
          </Action.Group>
        </Floating.Box>
      </Floating>
    </React.Fragment>
  );
};

SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
