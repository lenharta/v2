import { Action, Icon } from '@/core';
import { SideMenuOptionProps } from '../sidemenu-types';
import { selectors } from '../sidemenu-constants';

const SideMenuOption: React.FC<SideMenuOptionProps> = (props) => {
  const {
    open,
    group,
    value,
    label,
    store,
    icon,
    color,
    disabled,
    dispatch,
    onOpenChange,
    getIconVariant,
  } = props;

  return (
    <Action
      {...selectors.option.prop}
      value={value}
      label={label}
      disabled={disabled}
      onClick={(event) => {
        if (!disabled || !disabled) {
          dispatch({ [group]: event.currentTarget.value });
          onOpenChange({ ...open, [group]: !open[group] });
        }
      }}
      icon={
        <Icon
          name={icon}
          style={{ fill: color || undefined }}
          variant={getIconVariant(store.mode, group, store.icons)}
        />
      }
    />
  );
};

SideMenuOption.displayName = '@v2/SideMenu.Select.Option';
export { SideMenuOption };
