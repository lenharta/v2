import React from 'react';

interface CanvasDisplayProps {
  children?: React.ReactNode | undefined;
}

function CanvasDisplay(props: CanvasDisplayProps) {
  const { children } = props;

  return (
    <div className="v2-canvas-display">
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
}

CanvasDisplay.displayName = '@v2/Canvas.Display';
export { CanvasDisplay };
