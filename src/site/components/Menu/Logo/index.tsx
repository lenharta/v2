import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface MenuLogoProps {}

export type MenuLogoFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuLogoProps;
  omits: 'className' | 'children';
}>;

export const MenuLogo = factory<MenuLogoFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-logo">
      <span>Menu Logo</span>
    </div>
  );
});

MenuLogo.displayName = '@v2/site/Menu.Logo';
