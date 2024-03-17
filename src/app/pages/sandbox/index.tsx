import * as React from 'react';
import { Button, Title } from '@/common';

interface SlotComponentProps extends React.ComponentPropsWithoutRef<'button'> {
  radius?: React.CSSProperties['borderRadius'];
  width?: React.CSSProperties['width'];
}

export const SlotComponent = (props: SlotComponentProps) => {
  return <button {...props} className="slot-component" />;
};

type SandboxPlacement = 'start' | 'center' | 'end';

type SandboxProps = {
  placement?: SandboxPlacement;
};

type SandboxState = {
  placement: SandboxPlacement;
};

type SandboxContextValue = {
  state: SandboxState;
  dispatch: (state: Partial<SandboxState>) => void;
};

const SandboxContext = React.createContext({} as SandboxContextValue);
const SandboxProvider = SandboxContext.Provider;
const useSandboxCTX = () => React.useContext(SandboxContext);

const SandboxDisplayPanel = () => {
  const ctx = useSandboxCTX();
  console.log('ctx', ctx.state);
  return (
    <div className="sandbox-display-panel" data-placement={ctx.state.placement}>
      <div className="sandbox-display-container">
        <SlotComponent children="Slot Component" />
      </div>
    </div>
  );
};

const SandboxControlPanel = () => {
  const ctx = useSandboxCTX();
  return (
    <div className="sandbox-control-panel">
      <div className="sandbox-control-container">
        <p>Placement</p>
        <Button onClick={() => ctx.dispatch({ placement: 'center' })}>Center</Button>
        <Button onClick={() => ctx.dispatch({ placement: 'start' })}>Start</Button>
        <Button onClick={() => ctx.dispatch({ placement: 'end' })}>End</Button>
      </div>
    </div>
  );
};

const SandboxComponent = (props: SandboxProps) => {
  const { placement = 'center' } = props;

  const [state, dispatch] = React.useReducer(
    (current: SandboxState, update: Partial<SandboxState>) => ({
      ...current,
      ...update,
    }),
    {
      placement,
    }
  );

  return (
    <SandboxProvider value={{ state, dispatch }}>
      <div className="sandbox-component">
        <SandboxDisplayPanel />
        <SandboxControlPanel />
      </div>
    </SandboxProvider>
  );
};

export const Sandbox = () => {
  return (
    <div className="app-shell">
      <Title h1>Sandbox</Title>
      <SandboxComponent placement="end" />
    </div>
  );
};
