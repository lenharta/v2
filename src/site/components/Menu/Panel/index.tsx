import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { MenuFooter } from '@/site/components/Menu/Footer';
import { Core, Factory, Store } from '@/types';

export interface MenuPanelProps {
  scheme?: Core.Scheme;
  state: Store.AppStateProps['state'];
  dispatch: Store.AppStateProps['dispatch'];
}

export type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: MenuPanelProps;
  omits: 'className' | 'children';
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { state, scheme = 'primary', ...otherProps } = props;
  return (
    <Transition
      mounted={state.isMenuOpen ? true : false}
      timingFunction="ease-in-out"
      transition={{
        transitionProperty: 'opacity, transform',
        out: { opacity: 0, transform: 'translate(-100%)' },
        in: { opacity: 1, transform: 'translate(0)' },
      }}
    >
      {(transitionStyles) => (
        <div
          {...otherProps}
          ref={ref}
          style={transitionStyles}
          className="menu-panel"
          data-scheme={scheme}
        >
          <MenuFooter />
        </div>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/site/Menu.Panel';
