import clsx from 'clsx';
import * as React from 'react';

type SideMenuHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type SideMenuHeaderAttributeProps = React.RefAttributes<HTMLDivElement>;
type SideMenuHeaderBaseProps = SideMenuHeaderElementProps & SideMenuHeaderAttributeProps;

export interface SideMenuHeaderProps extends SideMenuHeaderBaseProps {}

const _SideMenuHeader = (props: SideMenuHeaderProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('SideMenu-header', className);
  return (
    <div {...otherProps} ref={ref} className={clxss}>
      {children}
    </div>
  );
};

export type SideMenuHeaderComponent = React.ForwardRefExoticComponent<SideMenuHeaderProps> & {};
export const SideMenuHeader = React.forwardRef(_SideMenuHeader) as SideMenuHeaderComponent;
SideMenuHeader.displayName = '@v2/SideMenu.Header';
