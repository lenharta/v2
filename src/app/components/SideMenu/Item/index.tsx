import clsx from 'clsx';
import * as React from 'react';

type SideMenuItemElementProps = React.ComponentPropsWithoutRef<'div'>;
type SideMenuItemAttributeProps = React.RefAttributes<HTMLDivElement>;
type SideMenuItemBaseProps = SideMenuItemElementProps & SideMenuItemAttributeProps;

export interface SideMenuItemProps extends SideMenuItemBaseProps {}

const _SideMenuItem = (props: SideMenuItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('SideMenu-item', className);
  return (
    <div {...otherProps} ref={ref} className={clxss} role="listitem">
      {children}
    </div>
  );
};

export type SideMenuItemComponent = React.ForwardRefExoticComponent<SideMenuItemProps> & {};
export const SideMenuItem = React.forwardRef(_SideMenuItem) as SideMenuItemComponent;
SideMenuItem.displayName = '@v2/SideMenu.Item';
