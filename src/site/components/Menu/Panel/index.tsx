import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { MenuFooter } from '../Footer';
import { Core, Factory } from '@/types';
import { useAppState } from '@/store';
import { useMergeRefs } from '@/hooks';
import { MenuLogo } from '../Logo';

const transitionConfig = {
  timingFunction: 'ease-in-out',
  transition: {
    transitionProperty: 'transform',
    out: { transform: 'translate(-100%)' },
    in: { transform: 'translate(0%)' },
  },
};

export interface MenuPanelProps {
  scheme?: Core.Scheme;
  clickRef?: React.MutableRefObject<HTMLDivElement | undefined>;
}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
  omits: 'className' | 'children';
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { scheme = 'primary', clickRef, ...otherProps } = props;
  const refs = useMergeRefs(ref, clickRef);
  const state = useAppState();

  return (
    <Transition mounted={state.isMenuOpen ? true : false} {...transitionConfig}>
      {(transitionStyles) => (
        <div
          {...otherProps}
          data-scheme={scheme}
          className="menu-panel"
          style={transitionStyles}
          ref={refs}
        >
          <div className="menu-panel-content">
            <MenuLogo />
            <MenuFooter />
          </div>
        </div>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/site/Menu.Panel';
