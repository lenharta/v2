import * as React from 'react';
import { Action, Floating } from '@/core';
import { Core, ICON, Store } from '@/types';

const FLOATING_TRANSITION: Partial<Core.FloatingProps> = {
  zIndex: 10000,
  behavior: 'click',
  transitionProps: {
    duration: 200,
    timingFunction: 'ease-in-out',
    transition: {
      transitionProperty: 'opacity, transform',
      common: { transformOrigin: 'left', transitionDelay: '200ms' },
      out: { transform: 'scaleX(0)', opacity: 0 },
      in: { transform: 'scaleX(1)', opacity: 1 },
    },
  },
};

export type SideMenuTargetProps = {
  store: Store.State;
  group: keyof Store.State;
  dispatch: (store: Partial<Store.State>) => void;
  items: {
    icon?: Partial<ICON.Props>;
    label: string;
    value: string;
  }[];
};

export type SideMenuTargetComponent = {
  (props: SideMenuTargetProps): React.ReactNode;
  displayName?: string;
};

export const SideMenuTarget: SideMenuTargetComponent = (props) => {
  const { dispatch, group, items, store } = props;

  const [isOpen, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    payload: Partial<Store.State>
  ) => {
    event.stopPropagation();
    dispatch(payload);
    setOpen(false);
  };

  const getGroupIconProps = (): Partial<ICON.Props> => {
    if (group === 'dir') {
      if (store[group] === 'ltr') {
        return { name: 'text-left' };
      }
      if (store[group] === 'rtl') {
        return { name: 'text-right' };
      }
    }
    if (group === 'accent') {
      return { name: 'shape-circle', fill: store[group] };
    }
    if (group === 'mode') {
      return { name: `mode-${store[group]}` };
    }
    return {};
  };

  return (
    <Floating
      isOpen={isOpen}
      onChange={() => setOpen((prev) => !prev)}
      placement={group === 'accent' ? 'right-start' : 'right'}
      {...FLOATING_TRANSITION}
    >
      <Floating.Target>
        <Action onClick={handleClick} icon={{ ...getGroupIconProps(), type: store.icons }} />
      </Floating.Target>
      <Floating.Box>
        <Action.Group className="v2-side-menu-select">
          {items.map((item) => (
            <Action
              key={item.value}
              icon={{ ...item.icon, type: store.icons }}
              onClick={(event) => handleItemClick(event, { [group]: item.value })}
              isSelected={store[group] === item.value}
              aria-label={item.label}
            />
          ))}
        </Action.Group>
      </Floating.Box>
    </Floating>
  );
};

SideMenuTarget.displayName = '@v2/Side.Menu.Target';
