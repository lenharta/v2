import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface MenuProps {}

type MenuFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuProps;
  omits: 'children';
}>;

const Menu = factory<MenuFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="div" className={clsx('v2-menu', className)}>
      <span>Menu</span>
    </Box>
  );
});

Menu.displayName = '@v2/Menu';
export { Menu, type MenuProps };
