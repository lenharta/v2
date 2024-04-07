import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface MenuNavProps {}

export type MenuNavFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuNavProps;
  omits: 'className' | 'children';
}>;

export const MenuNav = factory<MenuNavFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-nav">
      <span>Menu Nav</span>
    </div>
  );
});

MenuNav.displayName = '@v2/site/Menu.Nav';
