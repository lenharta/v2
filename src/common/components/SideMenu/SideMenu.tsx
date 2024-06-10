import React from 'react';
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
  const dispatch = useDispatchContext();
  const navigate = useNavigate();

  const [openPanels, setOpenPanels] = React.useState<SideMenuPanelState>({
    accent: false,
    mode: false,
    dir: false,
  });

  return (
    <div className={SIDE_MENU_CSS.root}>
      <Action.Group
        scheme="primary-1-interactive"
        variant="elevated"
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
            items={item.items}
            group={item.group}
            disabled={item.disabled}
            onOpenChange={setOpenPanels}
            dispatch={dispatch}
          />
        ))}

        {/* <SideMenu.Select
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
        /> */}
      </Action.Group>
    </div>
  );
};

SideMenu.Nav = SideMenuNav;
SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/SideMenu';
export { SideMenu };
