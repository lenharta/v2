import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useEventListener, useMergeRefs } from '@/hooks';
import { ColorGroup, colorItemData } from '../../color';
import { Box, Control, Divider, Transition } from '@/core';
import { useAppDispatch, useAppState, useThemeDispatch, useThemeState } from '@/store';

type MenuPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

export const MenuPanel = factory<MenuPanelFactory>((props, ref) => {
  const { ...otherProps } = props;
  const state = useAppState();
  const theme = useThemeState();

  const dispatch = useAppDispatch();
  const { setMode, setDir } = useThemeDispatch();

  const menuBoxRef = React.useRef<HTMLDivElement>(null);

  // useEventListener(
  //   'keydown',
  //   (event: any) => {
  //     if (event.code === 'Escape') {
  //       dispatch({ isMenuOpen: undefined });
  //     }
  //   },
  //   menuBoxRef
  // );

  const mergedRef = useMergeRefs(ref, menuBoxRef);

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
        <Box
          ref={mergedRef}
          {...otherProps}
          style={transitionStyles}
          className="menu-panel"
          onKeyDownCapture={(event) => {
            event.stopPropagation();
            if (event.code === 'Escape') {
              dispatch({ isMenuOpen: undefined });
            }
          }}
        >
          <aside className="menu-panel-container">
            <Divider label="Theme Mode" />

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

            <Divider label="Writing Mode" />

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

            <Divider label="Accent Color" />

            <Box className="menu-panel-group">
              <ColorGroup group="menu-accent-group" items={colorItemData} />
            </Box>
          </aside>
        </Box>
      )}
    </Transition>
  );
});

MenuPanel.displayName = '@v2/app/Menu.Panel';
