import { Action, Icon } from '@/core';
import { SideMenuOptionProps } from '../SideMenu.types';
import { SIDE_MENU_SELECTORS } from '../SideMenu.constants';

type SideMenuOptionFactory = React.FC<SideMenuOptionProps>;

const SideMenuOption: SideMenuOptionFactory = (props) => {
  const { open, group, value, label, store, icon, color, disabled, dispatch, onOpenChange } = props;

  return (
    <Action
      {...SIDE_MENU_SELECTORS.option.prop}
      value={value}
      label={label}
      icon={<Icon name={icon} style={{ fill: color || undefined }} variant={store.icons} />}
      disabled={disabled}
      onClick={(event) => {
        if (!disabled || !disabled) {
          dispatch({ [group]: event.currentTarget.value });
          onOpenChange({ ...open, [group]: !open[group] });
        }
      }}
    />
  );
};

SideMenuOption.displayName = '@v2/SideMenu.Select.Option';
export { SideMenuOption };
