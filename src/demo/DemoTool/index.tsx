import clsx from 'clsx';
import * as React from 'react';
import { Core, DEMO, ICON, Store } from '@/types';
import { Action, DURATION, EASING, Floating } from '@/core';

export type DemoToolProps = {
  state: DEMO.State;
  store: Store.State;
  dispatch: (payload: Partial<DEMO.State>) => void;
  prop: keyof DEMO.State;
  items: { label: string; value: string }[];
  iconProps?: Partial<ICON.Props>;
  floatingProps?: Partial<Core.FloatingProps>;
  css?: Partial<{
    target: string;
    drawer: string;
    option: string;
  }>;
};

export function getFloatingProps(
  isOpen: boolean,
  state: DEMO.State,
  props?: Partial<Core.FloatingProps>
): Partial<Core.FloatingProps> {
  const {
    dir,
    offset,
    behavior,
    placement,
    closeOnEscape,
    closeOnClickOutside,
    transitionProps,
    ...floatingProps
  } = props || {};

  return {
    ...floatingProps,
    dir: dir || state.dir,
    behavior: behavior || 'click',
    placement: placement || 'bottom-start',
    closeOnEscape: closeOnEscape || true,
    closeOnClickOutside: closeOnClickOutside || true,
    offset: offset || { crossAxis: -2 },
    transitionProps: {
      mounted: isOpen,
      duration: DURATION['moderate-01'],
      timingFunction: EASING['expressive'],
      transition: {
        in: { transform: 'scaleY(1)', opacity: 1 },
        out: { transform: 'scaleY(0)', opacity: 0 },
        common: { transformOrigin: 'top', transitionDelay: '100ms' },
        transitionProperty: 'opacity, transform',
        ...(!transitionProps?.transition ? {} : transitionProps.transition),
      },
      ...(!transitionProps ? {} : transitionProps),
    },
  };
}

const TOOL_ICONS: Record<string, ICON.Name> = {
  ltr: 'text-left',
  rtl: 'text-right',
  dim: 'mode-dim',
  dark: 'mode-dark',
  light: 'mode-light',
  red: 'shape-circle',
  orange: 'shape-circle',
  yellow: 'shape-circle',
  green: 'shape-circle',
  teal: 'shape-circle',
  cyan: 'shape-circle',
  blue: 'shape-circle',
  purple: 'shape-circle',
  magenta: 'shape-circle',
  stone: 'shape-circle',
  slate: 'shape-circle',
  grey: 'shape-circle',
};

const GROUP_ORIENTATION: Record<keyof DEMO.State, Core.Orientation> = {
  dir: 'horizontal',
  mode: 'horizontal',
  icons: 'horizontal',
  accent: 'vertical',
};

const TARGET_LABELS: Record<keyof DEMO.State, string> = {
  dir: 'Change Writing Direction',
  mode: 'Change Theme Mode',
  icons: 'Change Icon Type',
  accent: 'Change Accent Color',
};

export const DemoTool = (props: DemoToolProps) => {
  const { state, store, dispatch, css, prop, items, iconProps, floatingProps } = props;

  const [isOpen, setOpen] = React.useState(false);

  return (
    <Floating
      dir={store.dir}
      isOpen={isOpen}
      onChange={setOpen}
      behavior="click"
      closeOnEscape
      closeOnClickOutside
      transitionProps={{
        mounted: isOpen,
        duration: DURATION['moderate-01'],
        timingFunction: EASING['expressive'],
        transition: {
          in: { transform: 'scaleY(1)', opacity: 1 },
          out: { transform: 'scaleY(0)', opacity: 0 },
          common: { transformOrigin: 'top', transitionDelay: '100ms' },
          transitionProperty: 'opacity, transform',
        },
      }}
      {...getFloatingProps(isOpen, state, floatingProps)}
    >
      <Floating.Target>
        <Action
          title={TARGET_LABELS[prop]}
          aria-label={TARGET_LABELS[prop]}
          isSelected={isOpen || undefined}
          className={clsx('v2-demo-tool-target', css?.target)}
          icon={{
            ...iconProps,
            type: state.icons,
            name: TOOL_ICONS[state[prop]],
            fill: prop === 'accent' ? state.accent : 'currentColor',
          }}
        />
      </Floating.Target>

      <Floating.Box>
        <Action.Group
          orientation={GROUP_ORIENTATION[prop]}
          className={clsx('v2-demo-tool-drawer', css?.drawer)}
          gap="xxs"
        >
          {items.map((item) => (
            <Action
              key={item.value}
              title={item.label}
              aria-label={item.label}
              isSelected={state[prop] === item.value}
              className={clsx('v2-demo-tool-option', css?.option)}
              onClick={() => {
                dispatch({ [prop]: item.value });
                setOpen(false);
              }}
              icon={{
                type: state.icons,
                name: TOOL_ICONS[item.value],
                fill: prop === 'accent' ? (item.value as any) : 'currentColor',
              }}
            />
          ))}
        </Action.Group>
      </Floating.Box>
    </Floating>
  );
};
