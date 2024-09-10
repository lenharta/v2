import clsx from 'clsx';
import * as Router from 'react-router-dom';
import { Component } from '@/factory';
import { Core, ICON } from '@/types';

export type FooterItemProps = {
  icon?: Partial<ICON.Props>;
  label: string;
  to: string;
};

export type FooterItemFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  props: FooterItemProps;
  element: typeof Router.Link;
  excluded: 'children';
}>;

export const FooterItem = Component<FooterItemFactory>(
  ({ to = '/', label, className, component: Component = Router.Link, ...props }, ref) => {
    return (
      <Component
        {...props}
        to={to}
        ref={ref}
        className={clsx('v2-footer-item', className)}
        aria-label={label}
      >
        {label}
      </Component>
    );
  }
);

FooterItem.displayName = '@v2/Footer.Item';
