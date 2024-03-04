import clsx from 'clsx';
import * as React from 'react';

type SideMenuFooterElementProps = React.ComponentPropsWithoutRef<'footer'>;
type SideMenuFooterAttributeProps = React.RefAttributes<HTMLDivElement>;
type SideMenuFooterBaseProps = SideMenuFooterElementProps & SideMenuFooterAttributeProps;

export interface SideMenuFooterProps extends SideMenuFooterBaseProps {}

const _SideMenuFooter = (props: SideMenuFooterProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;
  const clxss = clsx('SideMenu-footer', className);
  return (
    <footer {...otherProps} ref={ref} className={clxss}>
      {children}
    </footer>
  );
};

export type SideMenuFooterComponent = React.ForwardRefExoticComponent<SideMenuFooterProps> & {};
export const SideMenuFooter = React.forwardRef(_SideMenuFooter) as SideMenuFooterComponent;
SideMenuFooter.displayName = '@v2/SideMenu.Footer';
