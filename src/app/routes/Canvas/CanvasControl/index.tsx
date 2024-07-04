import * as React from 'react';

const CanvasControlDefault: React.FC<{}> = ({}) => {
  return <span>CanvasControlDefault</span>;
};

const CanvasControl: React.FC<{}> & {
  Default: typeof CanvasControlDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasControl.Default />
    </React.Fragment>
  );
};

CanvasControl.Default = CanvasControlDefault;
CanvasControl.displayName = '@v2/Canvas.Control';
export { CanvasControl };
