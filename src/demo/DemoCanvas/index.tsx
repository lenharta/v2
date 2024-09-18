import React from 'react';
import { useDemoContext } from '../Demo.context';

export type DemoCanvasProps = {
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
};

export const DemoCanvas = (props: DemoCanvasProps) => {
  const { children, containerStyle } = props;
  const { display, settings } = useDemoContext();

  const dataAttributes = {
    'data-prefers-dir': display.state.dir,
    'data-prefers-color-mode': display.state.mode,
    'data-prefers-color-accent': display.state.accent,
  };

  return (
    <div className="v2-demo-canvas" {...dataAttributes}>
      <div className="v2-demo-canvas-container" style={containerStyle}>
        {React.cloneElement(children as JSX.Element, settings.state)}
      </div>
    </div>
  );
};
