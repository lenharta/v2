import * as React from 'react';
import * as Router from 'react-router-dom';
import { IconProps } from '@/core';
import { SideNavTarget } from './SideNavTarget';
import { SideNavTooltip } from './SideNavTooltip';

interface SideNavProps {
  links: { label: string; value: string; icon: Partial<IconProps> }[];
  onClick: (value: string) => void;
  location?: Router.Location | undefined;
}

type SideNavFactory = React.FC<SideNavProps> & {
  Target: typeof SideNavTarget;
  Tooltip: typeof SideNavTooltip;
};

const SideNav: SideNavFactory = (props) => {
  const { links = [], location, onClick } = props;

  return (
    <React.Fragment>
      {links.map((item) => (
        <SideNav.Target
          key={item.value}
          icon={item.icon}
          value={item.value}
          label={item.label}
          onClick={onClick}
          location={location}
        >
          {(props) => <SideNav.Tooltip {...props} />}
        </SideNav.Target>
      ))}
    </React.Fragment>
  );
};

SideNav.Target = SideNavTarget;
SideNav.Tooltip = SideNavTooltip;
SideNav.displayName = '@v2/Side.Nav';
export { SideNav, type SideNavProps, type SideNavFactory };
