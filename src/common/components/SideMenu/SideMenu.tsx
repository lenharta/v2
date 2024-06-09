import React from 'react';
import { Action, Icon } from '@/core';
import { useNavigate } from 'react-router-dom';
import { SideMenuSelect } from './SideMenuSelect';
import { SideMenuCSS, SideMenuNavItem, SideMenuProps } from './types';
import { useDispatchContext, useStateContext } from '@/app';

type SideMenuFactory = React.FC<SideMenuProps> & {
  Select: typeof SideMenuSelect;
};

const css: Partial<SideMenuCSS> = {
  root: 'v2-sidemenu',
};

const navItems: SideMenuNavItem[] = [
  { label: 'home', value: '/', icon: 'house' },
  { label: 'experience', value: '/experience', icon: 'briefcase' },
  { label: 'projects', value: '/projects', icon: 'box' },
  { label: 'toolbox', value: '/toolbox', icon: 'wrench-circle' },
  { label: 'sandbox', value: '/sandbox', icon: 'boxes' },
  { label: 'contact', value: '/contact', icon: 'at' },
];

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;

  const store = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  const [openPanels, setOpenPanels] = React.useState({
    accent: false,
    mode: false,
    dir: false,
  });

  return (
    <div className={css.root}>
      <Action.Group
        scheme="primary-interactive"
        variant="elevated"
        component="nav"
        orientation="vertical"
        childSelector="[data-sidemenu-action-item]"
        parentSelector="[data-sidemenu-action-group]"
        data-sidemenu-action-group
      >
        {navItems.map((item) => (
          <Action
            data-sidemenu-action-item
            icon={<Icon name={item.icon} variant={store.icons} />}
            onClick={(event) => navigate(event.currentTarget.value)}
            label={item.label}
            value={item.value}
            key={item.value}
          />
        ))}

        <Action.Spacer />

        <SideMenu.Select
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.accent}
          setOpen={() => setOpenPanels({ ...openPanels, accent: !openPanels.accent })}
          data={[
            { label: 'Light', value: 'light', name: 'mode' },
            { label: 'Dark', value: 'dark', name: 'mode' },
            { label: 'Dim', value: 'dim', name: 'mode' },
          ]}
        />

        <SideMenu.Select
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.mode}
          setOpen={() => setOpenPanels({ ...openPanels, mode: !openPanels.mode })}
          data={[
            { label: 'Light', value: 'light', name: 'mode' },
            { label: 'Dark', value: 'dark', name: 'mode' },
            { label: 'Dim', value: 'dim', name: 'mode' },
          ]}
        />

        <SideMenu.Select
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.dir}
          setOpen={() => setOpenPanels({ ...openPanels, dir: !openPanels.dir })}
          data={[
            { label: 'Light', value: 'light', name: 'mode' },
            { label: 'Dark', value: 'dark', name: 'mode' },
            { label: 'Dim', value: 'dim', name: 'mode' },
          ]}
        />
      </Action.Group>
    </div>
  );
};

SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
