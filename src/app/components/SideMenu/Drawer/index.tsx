import clsx from 'clsx';
import React from 'react';

type SideMenuDrawerElementProps = React.ComponentPropsWithoutRef<'div'>;
type SideMenuDrawerAttributeProps = React.RefAttributes<HTMLDivElement>;
type SideMenuDrawerBaseProps = SideMenuDrawerElementProps & SideMenuDrawerAttributeProps;

export interface SideMenuDrawerProps extends SideMenuDrawerBaseProps {}

const _SideMenuDrawer = (props: SideMenuDrawerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('SideMenu-drawer', className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
};

export type SideMenuDrawerComponent = React.ForwardRefExoticComponent<SideMenuDrawerProps> & {};
export const SideMenuDrawer = React.forwardRef(_SideMenuDrawer) as SideMenuDrawerComponent;
SideMenuDrawer.displayName = '@v2/SideMenu.Drawer';
