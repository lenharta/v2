import * as React from 'react';
import { Button } from '@/core';

const CanvasButtonVariants: React.FC<{}> = ({}) => {
  return (
    <div className="v2-canvas-button-variants">
      <Button variant="base-default" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
      <Button variant="base-elevated" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
      <Button variant="accent-default" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
      <Button variant="accent-elevated" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
      <Button variant="accent-tonal" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
      <Button variant="accent-ghost" iconRight={{ name: 'arrow-east' }}>
        Button
      </Button>
    </div>
  );
};

const CanvasButton: React.FC<{}> & {
  Variants: typeof CanvasButtonVariants;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasButton.Variants />
    </React.Fragment>
  );
};

CanvasButton.Variants = CanvasButtonVariants;
CanvasButton.displayName = '@v2/Canvas.Button';
export { CanvasButton };
