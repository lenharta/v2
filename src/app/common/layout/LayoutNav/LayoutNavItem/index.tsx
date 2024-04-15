import { ICON } from '@/core';
import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

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
      label={label}
      navigate={navigate}
      className="layout-nav-item"
      aria-selected={selected}
      onKeyDown={(event) => {
        event.stopPropagation();

        const { currentTarget } = event ?? {};
        const parentElement = currentTarget.parentElement;

        const elements = (Array.from(parentElement?.children!) as HTMLButtonElement[]) || [];
        const currentIndex = elements.findIndex((node) => currentTarget === node);

        const nextIndex = currentIndex + 1;
        const prevIndex = currentIndex - 1;

        const ArrowDown = () => {
          if (elements[nextIndex]) {
            elements[nextIndex].focus();
          } else {
            elements[currentIndex].focus();
          }
        };

        const ArrowUp = () => {
          if (elements[prevIndex]) {
            elements[prevIndex].focus();
          } else {
            elements[currentIndex].focus();
          }
        };

        const Home = () => elements[0].focus();
        const PageUp = () => elements[0].focus();
        const ArrowLeft = () => elements[0].focus();

        const End = () => elements[elements.length - 1].focus();
        const PageDown = () => elements[elements.length - 1].focus();
        const ArrowRight = () => elements[elements.length - 1].focus();

        const events = {
          End,
          Home,
          PageUp,
          PageDown,
          ArrowUp,
          ArrowDown,
          ArrowLeft,
          ArrowRight,
        }[event.key];

        events?.();
      }}
    />
  );
});

LayoutNavItem.displayName = '@v2/app/LayoutNav.Item';
