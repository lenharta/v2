import React from 'react';
import { Theme } from '@/types';
import { Action } from '@/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatchContext, useStateContext } from '@/app';
import { SideMenuPanelState, SideMenuProps } from './SideMenu.types';
import { SideMenuSelect } from './SideMenuSelect';
import { SideMenuNav } from './SideMenuNav';
import {
  SIDE_MENU_CSS,
  SIDE_MENU_SELECTORS,
  SIDE_MENU_SELECT_DATA,
  SIDE_MENU_NAVIGATION_LINKS,
} from './SideMenu.constants';

type SideMenuFactory = React.FC<SideMenuProps> & {
  Nav: typeof SideMenuNav;
  Select: typeof SideMenuSelect;
};

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;

  const store = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatchContext();

  const [openPanels, setOpenPanels] = React.useState<SideMenuPanelState>({
    accent: false,
    mode: false,
    dir: false,
  });

  const scheme: Theme.Scheme = 'primary-1-interactive';
  const variant: 'default' | 'elevated' = 'elevated';

  return (
    <div className={SIDE_MENU_CSS.root}>
      <Action.Group
        scheme={scheme}
        variant={variant}
        component="nav"
        orientation="vertical"
        childSelector={SIDE_MENU_SELECTORS.item.key}
        parentSelector={SIDE_MENU_SELECTORS.group.key}
        {...SIDE_MENU_SELECTORS.group.prop}
      >
        <SideMenu.Nav
          {...SIDE_MENU_SELECTORS.item.prop}
          items={SIDE_MENU_NAVIGATION_LINKS}
          value={location.pathname}
          navigate={navigate}
          store={store}
        />

        <Action.Spacer />

        {SIDE_MENU_SELECT_DATA.map((item) => (
          <SideMenu.Select
            open={openPanels}
            store={store}
            scheme={scheme}
            variant={variant}
            items={item.items}
            group={item.group}
            disabled={item.disabled}
            onOpenChange={setOpenPanels}
            dispatch={dispatch}
          />
        ))}
      </Action.Group>
    </div>
  );
};

SideMenu.Nav = SideMenuNav;
SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
