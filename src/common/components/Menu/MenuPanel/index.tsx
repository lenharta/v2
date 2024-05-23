import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';

interface MenuPanelProps {}

type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
  omits: 'children';
}>;

const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('v2-menu-panel', className)} role="menu">
      <span>Menu Panel</span>
    </Box>
  );
});

MenuPanel.displayName = '@v2/Menu.Panel';
export { MenuPanel, type MenuPanelProps };
