import * as React from 'react';
import * as Router from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { SideNav } from './SideNav';

export type SideProps = {};

export type SideComponent = {
  (props: SideProps): React.ReactNode;
  displayName?: string;
  Menu: typeof SideMenu;
  Nav: typeof SideNav;
};

export const Side: SideComponent = (props) => {
  const navigate = Router.useNavigate();
  const location = Router.useLocation();
  return (
    <div {...props} className="v2-side">
      <Side.Nav location={location} navigate={navigate} />
      <div className="v2-side-spacer" />
      <Side.Menu />
    </div>
  );
};

Side.Nav = SideNav;
Side.Menu = SideMenu;
Side.displayName = '@v2/Side';
