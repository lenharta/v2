import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { MenuFooter } from '@/site/components/Menu/Footer';
import { useAppState } from '@/store';
import { useMergeRefs } from '@/hooks';
import { Core, Factory } from '@/types';

const transitionConfig = {
  timingFunction: 'ease-in-out',
  transition: {
    transitionProperty: 'opacity, transform',
    out: { opacity: 0, transform: 'translate(-100%)' },
    in: { opacity: 1, transform: 'translate(0)' },
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

  const state = useAppState();
  const refs = useMergeRefs(ref, clickRef);

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
          <MenuFooter />
        </div>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/site/Menu.Panel';
