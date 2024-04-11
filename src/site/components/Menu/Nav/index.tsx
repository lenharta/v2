import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { MenuNavItem } from './Item';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { dataSiteMenuLinks } from '@/data';

export interface MenuNavProps {}

export type MenuNavFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuNavProps;
  omits: 'className' | 'children';
}>;

export const MenuNav = factory<MenuNavFactory>((props, ref) => {
  const { ...otherProps } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Box component="nav" {...otherProps} ref={ref} className="page-menu-nav" data-scheme="primary">
      <Box component="ul" className="page-menu-nav-content">
        {dataSiteMenuLinks.map(({ label, value, icon }) => (
          <MenuNavItem
            key={value}
            icon={icon}
            label={label}
            value={value}
            onClick={(event) => {
              event.stopPropagation();
              navigate(event.currentTarget.value);
              dispatch({ isMenuOpen: undefined });
            }}
          />
        ))}
      </Box>
    </Box>
  );
});

MenuNav.displayName = '@v2/site/Menu.MenuNav';
