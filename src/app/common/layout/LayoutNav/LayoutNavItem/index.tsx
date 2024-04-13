import { ICON } from '@/core';
import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';

type LayoutNavItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    to: string;
    icon: ICON;
    label: string;
    itemTotal: number;
    itemIndex: number;
    selected?: boolean | undefined;
    navigate: (to: string) => void;
    onClick: () => void;
  };
}>;

export const LayoutNavItem = factory<LayoutNavItemFactory>((props, ref) => {
  const { to, icon, itemIndex, itemTotal, label, selected, navigate, ...otherProps } = props;
  return (
    <Action
      {...otherProps}
      to={to}
      ref={ref}
      key={label}
      icon={icon}
      label={label}
      navigate={navigate}
      className="layout-nav-item"
      aria-selected={selected}
      onKeyDown={createEventCallback(otherProps.onKeyDown, (event) => {
        event.stopPropagation();
        const { currentTarget } = event ?? {};

        if (event.key === 'PageUp' || event.key === 'Home' || event.key === 'ArrowLeft') {
          const { parentElement } = currentTarget;
          const nodes = (Array.from(parentElement?.children!) as HTMLElement[]) || [];
          nodes[0].focus();
        }

        if (event.key === 'PageDown' || event.key === 'End' || event.key === 'ArrowRight') {
          const { parentElement } = currentTarget;
          const nodes = (Array.from(parentElement?.children!) as HTMLElement[]) || [];
          nodes[itemTotal].focus();
        }

        if (itemIndex > -1) {
          const { previousSibling } = currentTarget;
          if (event.key === 'ArrowUp') {
            previousSibling && (previousSibling as HTMLButtonElement).focus();
          }
        }
        if (itemIndex <= itemTotal + 1) {
          const { nextSibling } = currentTarget;
          if (event.key === 'ArrowDown') {
            nextSibling && (nextSibling as HTMLButtonElement).focus();
          }
        }
      })}
    />
  );
});

LayoutNavItem.displayName = '@v2/app/LayoutNav.Item';
