import * as React from 'react';
import { Theme } from '@types';
import { Action } from '@core';
import { CanvasDisplayState } from '../types';

interface CanvasDisplayProps<T extends Record<string, any>> {
  setDisplayState: (prop: keyof CanvasDisplayState, value: any) => void;
  displayState: CanvasDisplayState;
  children: React.ReactNode;
  state: T;
}

function parseDisplayAttributes(state: CanvasDisplayState): Record<Theme.Attribute, string> {
  return {
    'data-prefers-dir': state.dir,
    'data-prefers-color-mode': state.mode,
    'data-prefers-color-accent': state.accent,
    'data-prefers-color-contrast': state.contrast,
  };
}

interface DisplayActionModeProps<T = any> {
  setState: (prop: keyof CanvasDisplayState, value: any) => void;
  state: CanvasDisplayState;
  value: T;
}

const DisplayActionMode = (props: DisplayActionModeProps<Theme.Mode>) => {
  const { value, state, setState } = props;
  return (
    <Action
      icon={{ name: `mode-${value}` }}
      onClick={() => setState('mode', value)}
      selected={!!(state.mode === value) || undefined}
    />
  );
};

interface DisplayActionContrastProps {
  setState: (prop: keyof CanvasDisplayState, value: any) => void;
  state: CanvasDisplayState;
}

const DisplayActionContrast = (props: DisplayActionContrastProps) => {
  const { state, setState } = props;
  const nextValue = state.contrast === 'yes' ? 'no' : 'yes';
  return (
    <Action
      icon={{ name: 'palette' }}
      title="Accessible Contrast"
      onClick={() => setState('contrast', nextValue)}
      selected={!!(state.contrast === 'yes') || undefined}
    />
  );
};

interface DisplayActionDirProps<T = any> {
  setState: (prop: keyof CanvasDisplayState, value: any) => void;
  state: CanvasDisplayState;
  value: T;
}

const DisplayActionDir = (props: DisplayActionDirProps<Theme.Dir>) => {
  const { value, state, setState } = props;
  const nextIcon = value === 'ltr' ? 'text-left' : 'text-right';
  return (
    <Action
      icon={{ name: nextIcon }}
      title="Writing Direction"
      onClick={() => setState('dir', value)}
      selected={!!(state.dir === value) || undefined}
    />
  );
};

function CanvasDisplay<T extends Record<string, any>>(props: CanvasDisplayProps<T>) {
  const { children, state, displayState, setDisplayState } = props;
  return (
    <div className="v2-canvas-display" {...parseDisplayAttributes(displayState)}>
      <Action.Group className="v2-canvas-display-actions" orientation="horizontal">
        <DisplayActionMode setState={setDisplayState} state={displayState} value="light" />

        <DisplayActionMode setState={setDisplayState} state={displayState} value="dark" />

        <DisplayActionMode setState={setDisplayState} state={displayState} value="dim" />

        <Action.Spacer grow />

        <DisplayActionDir setState={setDisplayState} state={displayState} value="ltr" />

        <DisplayActionDir setState={setDisplayState} state={displayState} value="rtl" />

        <DisplayActionContrast setState={setDisplayState} state={displayState} />
      </Action.Group>

      <div className="v2-canvas-display-container">
        {React.cloneElement(children as JSX.Element, state)}
      </div>
    </div>
  );
}

CanvasDisplay.displayName = '@v2/Canvas.Display';
export { CanvasDisplay };
