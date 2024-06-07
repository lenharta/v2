import React from 'react';
import { Action, Icon } from '@/core';
import { useNavigate } from 'react-router-dom';
import { SideMenuSelect } from './SideMenuSelect';
import { SideMenuCSS, SideMenuNavItem, SideMenuProps } from './types';

type SideMenuFactory = React.FC<SideMenuProps> & {
  Select: typeof SideMenuSelect;
};

const css: Partial<SideMenuCSS> = {
  root: 'v2-sidemenu',
};

const navItems: SideMenuNavItem[] = [
  { label: 'home', value: '/', icon: 'work' },
  { label: 'projects', value: '/projects', icon: 'project' },
  { label: 'toolbox', value: '/toolbox', icon: 'tools' },
  { label: 'sandbox', value: '/sandbox', icon: 'stack' },
  { label: 'contact', value: '/contact', icon: 'ampersand' },
];

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;

  const navigate = useNavigate();

  const [openPanels, setOpenPanels] = React.useState({
    accent: false,
    mode: false,
    dir: false,
  });

  return (
    <div className={css.root}>
      <Action.Group
        scheme="default"
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
            icon={<Icon name={item.icon} />}
            onClick={(event) => navigate(event.currentTarget.value)}
            label={item.label}
            value={item.value}
            key={item.value}
          />
        ))}

        <Action.Spacer />

        <SideMenu.Select
          isOpen={openPanels.accent}
          setOpen={() => setOpenPanels({ ...openPanels, accent: !openPanels.accent })}
        />
        <SideMenu.Select
          isOpen={openPanels.mode}
          setOpen={() => setOpenPanels({ ...openPanels, mode: !openPanels.mode })}
        />
        <SideMenu.Select
          isOpen={openPanels.dir}
          setOpen={() => setOpenPanels({ ...openPanels, dir: !openPanels.dir })}
        />
      </Action.Group>
    </div>
  );
};

SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
