import * as React from 'react';
import { HUE } from '@/data';
import { Store } from '@/types';
import { Action, DURATION, EASING, Floating } from '@/core';
import { CanvasDisplayState } from '../sandbox-canvas';

export type SandboxDisplayColorProps = {
  store: Store.State;
  display: {
    state: CanvasDisplayState;
    setState: (payload: Partial<CanvasDisplayState>) => void;
  };
};

export const SandboxDisplayColor = ({ display, store }: SandboxDisplayColorProps) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Floating
      dir={store.dir}
      isOpen={isOpen}
      onChange={setOpen}
      offset={{ mainAxis: 0, crossAxis: -2 }}
      behavior="click"
      strategy="absolute"
      placement="bottom-start"
      closeOnEscape={true}
      closeOnClickOutside={true}
      transitionProps={{
        mounted: isOpen,
        duration: DURATION['moderate-01'],
        timingFunction: EASING['expressive'],
        transition: {
          transitionProperty: 'opacity, transform',
          common: { transformOrigin: 'top', transitionDelay: '100ms' },
          out: { transform: 'scaleY(0)', opacity: 0 },
          in: { transform: 'scaleY(1)', opacity: 1 },
        },
      }}
    >
      <Floating.Target>
        <Action
          icon={{ fill: display.state.accent, type: store.icons }}
          aria-label="change accent color"
          isSelected={isOpen}
        />
      </Floating.Target>

      <Floating.Box>
        <Action.Group className="v2-sandbox-canvas-color-drawer">
          {(Object.keys(HUE) as Store.State['accent'][]).map((accent) => (
            <Action
              key={accent}
              icon={{ fill: accent, type: store.icons }}
              isSelected={accent === display.state.accent}
              onClick={() => {
                display.setState({ accent });
                setOpen(false);
              }}
            />
          ))}
        </Action.Group>
      </Floating.Box>
    </Floating>
  );
};
