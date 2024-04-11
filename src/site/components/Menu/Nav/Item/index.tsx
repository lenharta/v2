import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Action, Box, ICON } from '@/core';

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
    <Box component="li" className="page-menu-nav-item">
      <Action
        {...otherProps}
        className="page-menu-nav-action"
        value={value}
        label={label}
        icon={icon}
        ref={ref}
      />
    </Box>
  );
});
