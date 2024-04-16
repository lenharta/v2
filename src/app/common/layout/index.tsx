import { LayoutContent, LayoutContentComponent } from './LayoutContent';
import { LayoutHeader, LayoutHeaderComponent } from './LayoutHeader';
import { LayoutNav, LayoutNavComponent } from './LayoutNav';

interface LayoutComponents {
  Content: LayoutContentComponent;
  Header: LayoutHeaderComponent;
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
Layout.Nav = LayoutNav;
