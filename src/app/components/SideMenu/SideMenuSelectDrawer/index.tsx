import { Factory } from '@/types';
import { Floating } from '@/core';
import { createFactory } from '@/factory';
import { SideMenuSelectDrawerProps } from '../SideMenu.types';

type SideMenuSelectDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SideMenuSelectDrawerProps;
}>;

const SideMenuSelectDrawer = createFactory<SideMenuSelectDrawerFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;

  return (
    <Floating.Box>
      <div ref={ref} className="v2-sidemenu-select-Drawer" {...forwardedProps}>
        {children}
      </div>
    </Floating.Box>
  );
});

SideMenuSelectDrawer.displayName = '@v2/SideMenu.Select.Drawer';
export { SideMenuSelectDrawer };
