import * as React from 'react';
import * as Router from 'react-router-dom';
import { ICON } from '@/types';
import { SideNavGroup } from './SideNavGroup';
import { SideNavTarget } from './SideNavTarget';

export type SideNavProps = {
  location: Router.Location;
  navigate: Router.NavigateFunction;
};

export type SideNavData = {
  uid: string;
  icon: Partial<ICON.Props>;
  value: string;
  label: string;
};

const navItems: SideNavData[] = [
  {
    uid: 'side:nav:item:a',
    icon: { name: 'person' },
    label: 'About',
    value: '/about',
  },
  {
    uid: 'side:nav:item:b',
    icon: { name: 'code-slash' },
    label: 'Stack',
    value: '/stack',
  },

  // {
  //   uid: 'side:nav:item:c',
  //   icon: { name: 'easel' },
  //   label: 'Projects',
  //   value: '/projects',
  // },
  {
    uid: 'side:nav:item:d',
    icon: { name: 'box-seam' },
    label: 'Sandbox',
    value: '/sandbox',
  },
];

export type SideNavComponent = {
  (props: SideNavProps): React.ReactNode;
  displayName?: string;
  Group: typeof SideNavGroup;
  Target: typeof SideNavTarget;
};

export const SideNav: SideNavComponent = (props: SideNavProps) => {
  return (
    <nav className="v2-side-nav">
      <SideNav.Group>
        {navItems.map((item) => (
          <SideNav.Target
            item={item}
            location={props.location}
            navigate={props.navigate}
            key={item.uid}
          />
        ))}
      </SideNav.Group>
    </nav>
  );
};

SideNav.Group = SideNavGroup;
SideNav.Target = SideNavTarget;
SideNav.displayName = '@v2/Side.Nav';
