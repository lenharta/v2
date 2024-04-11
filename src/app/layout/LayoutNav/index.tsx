import { useNavigate } from 'react-router-dom';
import { LayoutNavUpper, type LayoutNavUpperComponent } from './Upper';
import { LayoutNavLower, type LayoutNavLowerComponent } from './Lower';

export type LayoutNavComponent = React.FC<{}> & {
  Upper: LayoutNavUpperComponent;
  Lower: LayoutNavLowerComponent;
};

export const LayoutNav: LayoutNavComponent = ({}) => {
  const navigate = useNavigate();
  return (
    <nav className="layout-nav">
      <LayoutNav.Upper navigate={navigate} />
      <LayoutNav.Lower navigate={navigate} />
    </nav>
  );
};

LayoutNav.displayName = '@v2/app/Layout.Nav';
LayoutNav.Upper = LayoutNavUpper;
LayoutNav.Lower = LayoutNavLower;
