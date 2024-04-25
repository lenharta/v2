import { ICON } from '@/core';
import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { createKeyDownGroup } from '@/core/utils';

interface LayoutNavItemProps {
  to: string;
  icon: ICON;
  label: string;
  selected?: boolean | undefined;
  navigate: (to: string) => void;
}

type LayoutNavItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: LayoutNavItemProps;
}>;

export const LayoutNavItem = factory<LayoutNavItemFactory>((props, ref) => {
  const { to, icon, label, selected, navigate, ...otherProps } = props;

  return (
    <Action
      {...otherProps}
      to={to}
      ref={ref}
      key={label}
      icon={icon}
      role="menuitem"
      label={label}
      navigate={navigate}
      className="layout-nav-item"
      aria-selected={selected}
      onKeyDown={createKeyDownGroup({
        onKeyDown: otherProps.onKeyDown,
        orientation: 'vertical',
      })}
    />
  );
});

LayoutNavItem.displayName = '@v2/app/LayoutNav.Item';
