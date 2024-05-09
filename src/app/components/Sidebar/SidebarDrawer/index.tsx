import { cx } from '@/app/utils';
import { EASING } from '@/app/config';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Transition } from '@/core';

export interface SidebarDrawerProps {
  mounted: boolean;
  children: React.ReactNode;
  duration?: number | undefined;
  timingFunction?: string | undefined;
}

export type SidebarDrawerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SidebarDrawerProps;
}>;

const transition = {
  transitionProperty: 'transform, opacity',
  common: { transformOrigin: 'left' },
  out: { opacity: 0, transform: 'scaleX(0) translate(0%)' },
  in: { opacity: 1, transform: 'scaleX(1) translate(100%)' },
};

export const SidebarDrawer = factory<SidebarDrawerFactory>((props, ref) => {
  const {
    mounted,
    duration = 400,
    timingFunction = EASING.standard.productive,
    ...forwardedProps
  } = props;

  const transitionProps = { mounted, duration, timingFunction, transition };

  return (
    <Transition {...transitionProps}>
      {(transitionStyle) => (
        <div
          {...forwardedProps}
          ref={ref}
          style={transitionStyle}
          className={cx('sidebar-drawer')}
          data-orientation="horizontal"
          aria-orientation="horizontal"
        />
      )}
    </Transition>
  );
});

SidebarDrawer.displayName = '@v2/Sidebar.Drawer';
