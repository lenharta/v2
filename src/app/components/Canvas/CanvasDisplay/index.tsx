import * as React from 'react';

interface CanvasDisplayProps<T extends Record<string, any>> {
  children: React.ReactNode;
  state: T;
}

function CanvasDisplay<T extends Record<string, any>>(props: CanvasDisplayProps<T>) {
  const { children, state } = props;
  return (
    <div className="v2-canvas-display">
      <div>{React.cloneElement(children as JSX.Element, state)}</div>
    </div>
  );
}

CanvasDisplay.displayName = '@v2/Canvas.Display';
export { CanvasDisplay };
