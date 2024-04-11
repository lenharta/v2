import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useAppState } from '@/store';
import { Box, Title, Transition } from '@/core';

const transitionConfig = {
  timingFunction: 'ease-in-out',
  transition: {
    transitionProperty: 'transform',
    out: { transform: 'translate(-100%)' },
    in: { transform: 'translate(0%)' },
  },
};

type LayoutMenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

export const LayoutMenuPanel = factory<LayoutMenuPanelFactory>((props, ref) => {
  const { ...otherProps } = props;
  const state = useAppState();
  return (
    <Transition {...transitionConfig} mounted={state.isMenuOpen ? true : false}>
      {(transitionStyles) => (
        <Box ref={ref} {...otherProps} style={transitionStyles} className="layout-menu-panel">
          <Title>Menu Panel</Title>
        </Box>
      )}
    </Transition>
  );
});

LayoutMenuPanel.displayName = '@v2/app/LayoutMenu.Panel';
