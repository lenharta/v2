import * as React from 'react';
import { Action } from '@/core';

const CanvasActionVariants: React.FC<{}> = ({}) => {
  return (
    <div className="v2-canvas-action-variants">
      <Action variant="base-default" />
      <Action variant="base-elevated" />
      <Action variant="accent-default" />
      <Action variant="accent-elevated" />
      <Action variant="accent-tonal" />
      <Action variant="accent-ghost" />
    </div>
  );
};

const CanvasAction: React.FC<{}> & {
  Variants: typeof CanvasActionVariants;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasAction.Variants />
    </React.Fragment>
  );
};

CanvasAction.Variants = CanvasActionVariants;
CanvasAction.displayName = '@v2/Canvas.Action';
export { CanvasAction };
