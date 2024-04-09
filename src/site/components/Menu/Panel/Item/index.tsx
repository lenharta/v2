import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface MenuPanelItemProps {
  label: string;
}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelItemProps;
}>;

export const MenuPanelItem = factory<MenuPanelFactory>((props, ref) => {
  const { label } = props;
  return <div className="menu-panel-item">{label}</div>;
});
