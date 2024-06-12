import { css, selectors } from '../sidemenu-constants';
import { SideMenuTargetProps } from '../sidemenu-types';
import {
  Icon,
  Action,
  Floating,
  getStoreDirIconProps,
  getStoreModeIconProps,
  getStoreAccentIconProps,
} from '@/core';

const SideMenuTarget: React.FC<SideMenuTargetProps> = (props) => {
  const { open, group, store, scheme, variant, getIconVariant } = props;

  const iconProps = {
    accent: getStoreAccentIconProps(store['accent']),
    mode: getStoreModeIconProps(store['mode']),
    dir: getStoreDirIconProps(store['dir']),
  }[group];

  return (
    <Floating.Target>
      <Action
        {...selectors.item.prop}
        icon={<Icon {...iconProps} variant={getIconVariant(store.mode, group, store.icons)} />}
        className={css.target}
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
