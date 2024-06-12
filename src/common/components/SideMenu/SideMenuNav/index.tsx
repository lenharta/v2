import React from 'react';
import { SideMenuNavProps } from '../sidemenu-types';
import { SideMenuNavLink } from '../SideMenuNavLink';

type SideMenuNavFactory = React.FC<SideMenuNavProps> & {
  Link: typeof SideMenuNavLink;
};

const SideMenuNav: SideMenuNavFactory = (props) => {
  const { items, group, store, navigate } = props;
  return (
    <React.Fragment>
      {(items ?? []).map(({ value, ...rest }) => (
        <SideMenuNav.Link
          key={value}
          value={value}
          store={store}
          selected={group.value === value}
          navigate={navigate}
          {...rest}
        />
      ))}
    </React.Fragment>
  );
};

SideMenuNav.Link = SideMenuNavLink;
SideMenuNav.displayName = '@v2/SideMenu.Nav';
export { SideMenuNav };
