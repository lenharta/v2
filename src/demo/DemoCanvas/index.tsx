import React from 'react';
import { useDemoContext } from '../Demo.context';

export type DemoCanvasProps = {
  children: React.ReactNode;
};

export const DemoCanvas = (props: DemoCanvasProps) => {
  const { children } = props;
  const { display, settings } = useDemoContext();

  const dataAttributes = {
    'data-prefers-dir': display.state.dir,
    'data-prefers-color-mode': display.state.mode,
    'data-prefers-color-accent': display.state.accent,
  };

  return (
    <div className="v2-demo-canvas" {...dataAttributes}>
      <div className="v2-demo-canvas-container">
        {React.cloneElement(children as JSX.Element, settings.state)}
      </div>
    </div>
  );
};
