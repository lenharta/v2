import { SideMenuTargetProps } from '../SideMenu.types';
import { SIDE_MENU_CSS, SIDE_MENU_SELECTORS } from '../SideMenu.constants';

import {
  Icon,
  Action,
  Floating,
  getStoreDirIconProps,
  getStoreModeIconProps,
  getStoreAccentIconProps,
} from '@/core';

type SideMenuTargetFactory = React.FC<SideMenuTargetProps>;

const SideMenuTarget: SideMenuTargetFactory = (props) => {
  const { open, group, store, scheme, variant } = props;

  const iconProps = {
    accent: getStoreAccentIconProps(store['accent']),
    mode: getStoreModeIconProps(store['mode']),
    dir: getStoreDirIconProps(store['dir']),
  }[group];

  return (
    <Floating.Target>
      <Action
        {...SIDE_MENU_SELECTORS.item.prop}
        icon={<Icon {...iconProps} variant={store.icons} />}
        className={SIDE_MENU_CSS.target}
        selected={open[group]}
        variant={variant}
        scheme={scheme}
        label={group}
      />
    </Floating.Target>
  );
};

SideMenuTarget.displayName = '@v2/SideMenu.Select.Target';
export { SideMenuTarget };
