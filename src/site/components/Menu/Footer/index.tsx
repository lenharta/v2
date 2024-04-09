import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { DemoThemeMode } from '@/site/routes';

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
      <DemoThemeMode />
    </div>
  );
});

MenuFooter.displayName = '@v2/site/Menu.Footer';
