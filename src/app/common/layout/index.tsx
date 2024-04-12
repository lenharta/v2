import { LayoutContent, LayoutContentComponent } from './LayoutContent';
import { LayoutHeader, LayoutHeaderComponent } from './LayoutHeader';
import { LayoutMenu, LayoutMenuComponent } from './LayoutMenu';
import { LayoutNav, LayoutNavComponent } from './LayoutNav';

interface LayoutComponents {
  Content: LayoutContentComponent;
  Header: LayoutHeaderComponent;
  Menu: LayoutMenuComponent;
  Nav: LayoutNavComponent;
}

type LayoutComponent = React.FC<{
  children?: React.ReactNode | undefined;
}>;

export const Layout: LayoutComponent & LayoutComponents = ({ children }) => {
  return <div className="layout">{children}</div>;
};

Layout.Content = LayoutContent;
Layout.Header = LayoutHeader;
Layout.Menu = LayoutMenu;
Layout.Nav = LayoutNav;
