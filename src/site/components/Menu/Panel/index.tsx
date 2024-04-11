import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useAppState } from '@/store';
import { useMergeRefs } from '@/hooks';
import { Box, Transition } from '@/core';

import { MenuLogo } from '../Logo';
import { MenuFooter } from '../Footer';

const transitionConfig = {
  timingFunction: 'ease-in-out',
  transition: {
    transitionProperty: 'transform',
    out: { transform: 'translate(-100%)' },
    in: { transform: 'translate(0%)' },
  },
};

export interface MenuPanelProps {
  clickRef?: React.MutableRefObject<HTMLDivElement | undefined>;
}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
  omits: 'className' | 'children';
  comps: {
    Footer: typeof MenuFooter;
    Logo: typeof MenuLogo;
  };
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { clickRef, ...otherProps } = props;

  const state = useAppState();
  const refs = useMergeRefs(ref, clickRef);

  return (
    <Transition mounted={state.isMenuOpen ? true : false} {...transitionConfig}>
      {(transitionStyles) => (
        <Box {...otherProps} style={transitionStyles} className="page-menu-panel" ref={refs}>
          <Box className="page-menu-panel-content">
            <MenuPanel.Logo />
            <MenuPanel.Footer />
          </Box>
        </Box>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/site/Menu.Panel';
MenuPanel.Footer = MenuFooter;
MenuPanel.Logo = MenuLogo;
