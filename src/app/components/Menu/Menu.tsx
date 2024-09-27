import * as React from 'react';
import { Core } from '@/types';
import { useStore } from '@/app';
import { DURATION, EASING, Floating } from '@/core';
import { MenuDisplay } from './MenuDisplay';
import { MenuTarget } from './MenuTarget';

export type MenuProps = {};

export type MenuComponent = Core.NamedComponent & {
  (props: MenuProps): React.ReactNode;
  Display: typeof MenuDisplay;
  Target: typeof MenuTarget;
};

export const Menu: MenuComponent = ({}) => {
  const [isOpen, setOpen] = React.useState(false);
  const store = useStore();

  return (
    <Floating
      dir={store.dir}
      zIndex={12000}
      isOpen={isOpen}
      onChange={setOpen}
      behavior="click"
      placement={store.dir === 'ltr' ? 'bottom-end' : 'bottom-start'}
      strategy="fixed"
      middleware={{ flip: false, shift: true }}
      closeOnEscape={true}
      closeOnClickOutside={true}
      transitionProps={{
        mounted: isOpen,
        duration: DURATION['moderate-01'],
        timingFunction: EASING['expressive'],
        transition: {
          transitionProperty: 'opacity, transform',
          common: {
            transformOrigin: store.dir === 'ltr' ? 'right' : 'left',
          },
          in: { transform: 'scaleX(1)', opacity: 1 },
          out: { transform: 'scaleX(0)', opacity: 0 },
        },
      }}
    >
      <Menu.Target isOpen={isOpen} />
      <Menu.Display />
    </Floating>
  );
};

Menu.Target = MenuTarget;
Menu.Display = MenuDisplay;
Menu.displayName = '@v2/Menu';
