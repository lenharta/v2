import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { MenuNavItem } from './Item';
import { dataSiteLinks } from '@/data';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';

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
    <nav {...otherProps} ref={ref} className="menu-nav" data-scheme="primary">
      <ul className="menu-nav-list">
        {dataSiteLinks.map(({ label, value, icon }) => (
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
      </ul>
    </nav>
  );
});

MenuNav.displayName = '@v2/site/Menu.MenuNav';
