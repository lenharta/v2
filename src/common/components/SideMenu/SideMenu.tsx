import React from 'react';
import { Theme } from '@/types';
import { Action } from '@/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatchContext, useStateContext } from '@/app';

import { SideMenuNav } from './SideMenuNav';
import { SideMenuSelect } from './SideMenuSelect';
import { SideMenuPanelState, SideMenuProps } from './sidemenu-types';
import { css, selectors, SIDEMENU_SELECT_DATA, SIDEMENU_NAV_DATA } from './sidemenu-constants';

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
    <div className={css.root}>
      <Action.Group
        scheme={scheme}
        variant={variant}
        component="nav"
        orientation="vertical"
        childSelector={selectors.item.key}
        parentSelector={selectors.group.key}
        {...selectors.group.prop}
      >
        <SideMenu.Nav
          {...selectors.item.prop}
          items={SIDEMENU_NAV_DATA}
          group={{ value: location.pathname }}
          navigate={navigate}
          store={store}
        />

        <Action.Spacer />

        {SIDEMENU_SELECT_DATA.map((item) => (
          <SideMenu.Select
            key={item.group}
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
