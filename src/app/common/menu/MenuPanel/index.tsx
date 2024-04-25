import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box, Control, Transition } from '@/core';
import { useAppState, useThemeDispatch, useThemeState } from '@/store';

type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { ...otherProps } = props;
  const state = useAppState();
  const theme = useThemeState();
  const { setMode, setDir } = useThemeDispatch();

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
          <Box className="menu-panel-group"></Box>
          <Box className="menu-panel-group">
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

          <Box className="menu-panel-group">
            <Control
              value={theme.dir}
              onChange={(event) => setDir(event.currentTarget.value as any)}
              data={[
                { value: 'ltr', label: 'LTR' },
                { value: 'rtl', label: 'RTL' },
              ]}
            />
          </Box>
        </Box>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/app/Menu.Panel';
