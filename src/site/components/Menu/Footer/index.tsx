import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface MenuFooterProps {}

export type MenuFooterFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuFooterProps;
  omits: 'className' | 'children';
}>;

export const MenuFooter = factory<MenuFooterFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-footer">
      <span>Menu Footer</span>
    </div>
  );
});

MenuFooter.displayName = '@v2/site/Menu.Footer';
