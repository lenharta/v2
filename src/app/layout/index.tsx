import { LayoutContent, type LayoutContentComponent } from './LayoutContent';
import { LayoutHeader, type LayoutHeaderComponent } from './LayoutHeader';
import { LayoutMenu, type LayoutMenuComponent } from './LayoutMenu';
import { LayoutNav, type LayoutNavComponent } from './LayoutNav';

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

export * from './error';
