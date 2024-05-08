import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { MenuPanelCSS } from '@/app/components';

export interface MenuPanelProps {
  css: MenuPanelCSS;
}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { css, children, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={css.root}>
      <div className={css.box} role="menu">
        {children}
      </div>
    </div>
  );
});

MenuPanel.displayName = '@v2/Menu.Panel';
