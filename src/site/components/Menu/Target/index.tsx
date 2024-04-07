import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface MenuTargetProps {}

export type MenuTargetFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuTargetProps;
  omits: 'className' | 'children';
}>;

export const MenuTarget = factory<MenuTargetFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="menu-target">
      <span>Menu Target</span>
    </div>
  );
});

MenuTarget.displayName = '@v2/site/Menu.Target';
