import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface MenuPanelProps {}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
  omits: 'className' | 'children';
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-panel">
      <span>Menu Panel</span>
    </div>
  );
});

MenuPanel.displayName = '@v2/site/Menu.Panel';
