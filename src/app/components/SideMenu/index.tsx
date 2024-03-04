import clsx from 'clsx';
import * as React from 'react';

import { SideMenuDrawer } from './Drawer';
import { SideMenuHeader } from './Header';
import { SideMenuFooter } from './Footer';
import { SideMenuList } from './List';
import { SideMenuItem } from './Item';
import { useStore } from '@/store';

type SideMenuElementProps = React.ComponentPropsWithoutRef<'aside'>;
type SideMenuAttributeProps = React.RefAttributes<HTMLElement>;
type SideMenuBaseProps = SideMenuElementProps & SideMenuAttributeProps;

export interface SideMenuProps extends SideMenuBaseProps {}

const _SideMenu = (props: SideMenuProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;

  const store = useStore();
  const clxss = clsx('SideMenu-content', className);

  return (
    <SideMenuDrawer data-menu-open={store.menuOpen ? true : undefined}>
      <aside {...otherProps} ref={ref} className={clxss}>
        {children}
      </aside>
    </SideMenuDrawer>
  );
};

export type SideMenuComponent = React.ForwardRefExoticComponent<SideMenuProps> & {
  Drawer: typeof SideMenuDrawer;
  Header: typeof SideMenuHeader;
  Footer: typeof SideMenuFooter;
  List: typeof SideMenuList;
  Item: typeof SideMenuItem;
};

export const SideMenu = React.forwardRef(_SideMenu) as SideMenuComponent;
SideMenu.displayName = '@v2/SideMenu';
