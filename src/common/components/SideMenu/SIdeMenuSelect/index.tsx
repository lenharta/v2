import React from 'react';
import { Action, Floating, Icon } from '@/core';

type SideMenuSelectFactory = React.FC<{
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}> & {};

const SideMenuSelect: SideMenuSelectFactory = (props) => {
  const { isOpen, setOpen } = props;

  return (
    <React.Fragment>
      <Floating isOpen={isOpen} onChange={setOpen} placement="right">
        <Floating.Target>
          <Action
            data-sidemenu-action-item
            icon={<Icon name="modeDark" />}
            selected={isOpen}
            variant="elevated"
            scheme="default"
            label="mode"
          />
        </Floating.Target>

        <Floating.Box>
          <Action.Group scheme="default" variant="elevated">
            <Action
              icon={<Icon name="modeLight" />}
              onClick={(event) => console.log(event.currentTarget.value)}
              label="light"
              value="light"
            />
            <Action
              icon={<Icon name="modeDark" />}
              onClick={(event) => console.log(event.currentTarget.value)}
              label="dark"
              value="dark"
            />
            <Action
              icon={<Icon name="modeDim" />}
              onClick={(event) => console.log(event.currentTarget.value)}
              label="dim"
              value="dim"
            />
          </Action.Group>
        </Floating.Box>
      </Floating>
    </React.Fragment>
  );
};

SideMenuSelect.displayName = '@v2/SideMenu.Select';
export { SideMenuSelect };
