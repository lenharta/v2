import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action, IconProps } from '@/core';

interface SideNavProps {
  links: { label: string; value: string; icon: Partial<IconProps> }[];
  onClick?: ((value: string) => void) | undefined;
  location?: Router.Location | undefined;
}

type SideNavFactory = React.FC<SideNavProps> & {};

const SideNav: SideNavFactory = (props) => {
  const { links = [], location, onClick } = props;
  return (
    <React.Fragment>
      {links.map((item) => (
        <Action
          key={item.value}
          icon={item.icon}
          value={item.value}
          onClick={() => onClick?.(item.value)}
          selected={location?.pathname === item.value}
          aria-label={item.label}
        />
      ))}
    </React.Fragment>
  );
};

SideNav.displayName = '@v2/Side.Nav';
export { SideNav, type SideNavProps, type SideNavFactory };
