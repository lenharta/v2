import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useAppState, useThemeDispatch, useThemeState } from '@/store';
import { Box, Control, Title, Transition } from '@/core';

type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { ...otherProps } = props;
  const state = useAppState();
  const theme = useThemeState();
  const { setMode } = useThemeDispatch();

  return (
    <Transition
      mounted={state.isMenuOpen ? true : false}
      duration={400}
      timingFunction="cubic-bezier(0.4, 0.14, 0.3, 1)"
      transition={{
        transitionProperty: 'transform',
        in: { transform: 'translate(0%)' },
        out: { transform: 'translate(-100%)' },
      }}
    >
      {(transitionStyles) => (
        <Box ref={ref} {...otherProps} style={transitionStyles} className="menu-panel">
          <Box className="menu-panel-box">
            <Control
              value={theme.mode}
              onChange={(event) => setMode(event.currentTarget.value as any)}
              data={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'dim', label: 'Dim' },
              ]}
            />
          </Box>
        </Box>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/app/Menu.Panel';
