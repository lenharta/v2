import * as React from 'react';
import { SideMenuSelect } from './SideMenuSelect';
import { useDispatch, useStore } from '@/app/store';
import { THEME_VALUE_MAP, THEME_ICON_MAP } from '@/app/static';

interface SideMenuProps {}

type SideMenuFactory = React.FC<SideMenuProps> & {
  Select: typeof SideMenuSelect;
};

const SideMenu: SideMenuFactory = (props) => {
  const {} = props;

  const store = useStore();
  const dispatch = useDispatch();

  const accent = store.accent;
  const mode = store.mode;
  const dir = store.dir;

  return (
    <React.Fragment>
      <SideMenu.Select
        group={{ name: 'accent', value: accent, icon: THEME_ICON_MAP['accent'][accent] }}
        data={THEME_VALUE_MAP['accent'].map((v) => ({
          icon: { ...THEME_ICON_MAP['accent'][v], type: store.icons },
          label: `set ${v} accent color`,
          value: v,
        }))}
      />

      <SideMenu.Select
        group={{ name: 'mode', value: mode, icon: THEME_ICON_MAP['mode'][mode] }}
        data={THEME_VALUE_MAP['mode'].map((v) => ({
          icon: { ...THEME_ICON_MAP['mode'][v], type: store.icons },
          label: `set ${v} theme mode`,
          value: v,
        }))}
      />

      <SideMenu.Select
        group={{ name: 'dir', value: dir, icon: THEME_ICON_MAP['dir'][dir] }}
        data={THEME_VALUE_MAP['dir'].map((v) => ({
          icon: { ...THEME_ICON_MAP['dir'][v], type: store.icons },
          label: `set ${v === 'ltr' ? 'left to right' : 'right to left'} writing mode`,
          value: v,
        }))}
      />
    </React.Fragment>
  );
};

SideMenu.Select = SideMenuSelect;
SideMenu.displayName = '@v2/Side.Menu';
export { SideMenu, type SideMenuProps };
