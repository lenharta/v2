import { Divider } from '@/core';
import { Component } from '@/factory';
import { Core, ICON } from '@/types';
import { FooterItem } from '../FooterItem';
import clsx from 'clsx';

export type FooterGroupProps = {
  group: string;
  items: {
    icon?: Partial<ICON.Props>;
    label: string;
    to: string;
  }[];
};

export type FooterGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: FooterGroupProps;
  element: 'div';
  excluded: 'children';
}>;

export const FooterGroup = Component<FooterGroupFactory>(
  ({ group, items, className, component: Component = 'div', ...props }, ref) => {
    return (
      <Component {...props} ref={ref} className={clsx('v2-footer-group', className)}>
        <Divider label={group} />
        {items.map((item) => (
          <FooterItem key={item.to} {...item} />
        ))}
      </Component>
    );
  }
);

FooterGroup.displayName = '@v2/Footer.Group';
