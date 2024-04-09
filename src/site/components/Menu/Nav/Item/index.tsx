import { Action, ICON } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface MenuNavItemProps {
  icon?: ICON | undefined;
  label: string;
}

export type MenuNavItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: MenuNavItemProps;
}>;

export const MenuNavItem = factory<MenuNavItemFactory>((props, ref) => {
  const { icon = 'placeholder', label, value, ...otherProps } = props;
  return (
    <li className="menu-nav-item">
      <Action
        {...otherProps}
        className="menu-nav-item-action"
        value={value}
        label={label}
        icon={icon}
        ref={ref}
      />
    </li>
  );
});
