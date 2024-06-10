import React from 'react';
import { Action, Icon } from '@/core';
import { useLocation, useNavigate } from 'react-router-dom';
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
  { label: 'experience', value: '/experience', icon: 'briefcase' },
  { label: 'projects', value: '/projects', icon: 'box' },
  { label: 'toolbox', value: '/toolbox', icon: 'code-slash' },
  { label: 'sandbox', value: '/sandbox', icon: 'layers' },
  { label: 'settings', value: '/settings', icon: 'gear' },
];

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;

  const store = useStateContext();
  const location = useLocation();
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
        scheme="primary-1-interactive"
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
            selected={location.pathname === item.value}
            label={item.label}
            value={item.value}
            key={item.value}
          />
        ))}

        <Action.Spacer scheme="primary-1" variant="elevated" />

        <SideMenu.Select
          name="accent"
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.mode}
          setOpen={() => setOpenPanels({ ...openPanels, mode: !openPanels.mode })}
          data={[
            { label: 'Red', value: 'red' },
            { label: 'Orange', value: 'orange' },
            { label: 'Yellow', value: 'yellow' },
            { label: 'Green', value: 'green' },
            { label: 'Mint', value: 'mint' },
            { label: 'Teal', value: 'teal' },
            { label: 'Cyan', value: 'cyan' },
            { label: 'Blue', value: 'blue' },
            { label: 'Indigo', value: 'indigo' },
            { label: 'Purple', value: 'purple' },
            { label: 'Pink', value: 'pink' },
            { label: 'Brown', value: 'brown' },
          ]}
        />

        <SideMenu.Select
          name="mode"
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.accent}
          setOpen={() => setOpenPanels({ ...openPanels, accent: !openPanels.accent })}
          data={[
            { label: 'Light', value: 'light' },
            { label: 'Dim', value: 'dim' },
            { label: 'Dark', value: 'dark' },
          ]}
        />

        <SideMenu.Select
          name="dir"
          store={store}
          dispatch={dispatch}
          isOpen={openPanels.dir}
          setOpen={() => setOpenPanels({ ...openPanels, dir: !openPanels.dir })}
          data={[
            { label: 'Left to Right', value: 'ltr' },
            { label: 'Right to Left', value: 'rtl' },
          ]}
        />
      </Action.Group>
    </div>
  );
};

SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
