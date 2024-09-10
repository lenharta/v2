import clsx from 'clsx';
import { Core } from '@/types';
import { Divider } from '@/core';
import { Component } from '@/factory';
import { FooterItem } from '../FooterItem';
import * as Router from 'react-router-dom';

export type FooterGroupProps = {
  dividerProps?: Partial<Core.DividerProps>;
  group: string;
  items: {
    type?: 'internal' | 'external';
    label: string;
    value: string;
    onClick?: (value: string) => void;
  }[];
};

export type FooterGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: FooterGroupProps;
  element: 'div';
  excluded: 'children';
}>;

export const FooterGroup = Component<FooterGroupFactory>(
  ({ group, items, dividerProps, className, component: Component = 'div', ...props }, ref) => {
    const navigate = Router.useNavigate();

    return (
      <Component {...props} ref={ref} className={clsx('v2-footer-group', className)}>
        <Divider {...dividerProps} label={group} />

        {items.map((item) => (
          <FooterItem
            key={item.value}
            type={item.type}
            value={item.value}
            label={item.label}
            onClick={navigate}
          />
        ))}
      </Component>
    );
  }
);

FooterGroup.displayName = '@v2/Footer.Group';
