import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { LayoutNavUpper, type LayoutNavUpperComponent } from './LayoutNavUpper';
import { LayoutNavLower, type LayoutNavLowerComponent } from './LayoutNavLower';

export type LayoutNavComponent = React.FC<{}> & {
  Upper: LayoutNavUpperComponent;
  Lower: LayoutNavLowerComponent;
};

export const LayoutNav: LayoutNavComponent = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <nav className="layout-nav">
      <LayoutNav.Upper navigate={navigate} dispatch={dispatch} />
      <LayoutNav.Lower navigate={navigate} dispatch={dispatch} />
    </nav>
  );
};

LayoutNav.displayName = '@v2/app/Layout.Nav';
LayoutNav.Upper = LayoutNavUpper;
LayoutNav.Lower = LayoutNavLower;
