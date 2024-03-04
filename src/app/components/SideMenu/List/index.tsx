import clsx from 'clsx';
import * as React from 'react';

type SideMenuListElementProps = React.ComponentPropsWithoutRef<'div'>;
type SideMenuListAttributeProps = React.RefAttributes<HTMLDivElement>;
type SideMenuListBaseProps = SideMenuListElementProps & SideMenuListAttributeProps;

export interface SideMenuListProps extends SideMenuListBaseProps {}

const _SideMenuList = (props: SideMenuListProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('SideMenu-list', className);
  return (
    <div {...otherProps} ref={ref} className={clxss} role="list">
      {children}
    </div>
  );
};

export type SideMenuListComponent = React.ForwardRefExoticComponent<SideMenuListProps> & {};
export const SideMenuList = React.forwardRef(_SideMenuList) as SideMenuListComponent;
SideMenuList.displayName = '@v2/SideMenu.List';
