import { MenuFooter } from './Footer';
import { MenuTarget } from './Target';
import { MenuPanel } from './Panel';
import { MenuLogo } from './Logo';
import { MenuNav } from './Nav';
import { useAppDispatch, useAppState } from '@/store';

export interface MenuProps {}

export type MenuComponent = React.FC<MenuProps> & {
  Footer: typeof MenuFooter;
  Target: typeof MenuTarget;
  Panel: typeof MenuPanel;
  Logo: typeof MenuLogo;
  Nav: typeof MenuNav;
};

export const Menu: MenuComponent = (props) => {
  const {} = props;
  const appState = useAppState();
  const appDispatch = useAppDispatch();
  return (
    <>
      <span>Menu</span>
    </>
  );
};

Menu.displayName = '@v2/site/Menu';
Menu.Footer = MenuFooter;
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
Menu.Logo = MenuLogo;
Menu.Nav = MenuNav;
