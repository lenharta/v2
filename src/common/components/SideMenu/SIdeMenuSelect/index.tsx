import React from 'react';
import { Action, Floating, Icon, IconProps } from '@/core';
import { Store } from '@/types';

type SideMenuSelectFactory = React.FC<{
  store: Store.State;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  dispatch: (store: Partial<Store.State>) => void;
  data: {
    name: keyof Store.State;
    value: string;
    label: string;
    icon?: IconProps['name'] | undefined;
  }[];
}> & {};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const { data, store, isOpen, setOpen, dispatch } = props;

  return (
    <React.Fragment>
      <Floating isOpen={isOpen} onChange={setOpen} placement="right">
        <Floating.Target>
          <Action
            data-sidemenu-action-item
            icon={<Icon variant={store.icons} />}
            selected={isOpen}
            variant="elevated"
            scheme="primary-interactive"
            label="mode"
          />
        </Floating.Target>

        <Floating.Box>
          <Action.Group scheme="primary-interactive" variant="elevated">
            {data.map((item) => (
              <Action
                key={item.value}
                icon={<Icon variant={store.icons} name={item.icon} />}
                onClick={() => dispatch({ [item.name]: item.value })}
                selected={item.value === store[item.name] || undefined}
                value={item.value}
                label={item.label}
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
