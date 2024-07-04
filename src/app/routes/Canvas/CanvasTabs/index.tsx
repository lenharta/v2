import * as React from 'react';

const CanvasTabsDefault: React.FC<{}> = ({}) => {
  return <span>CanvasTabsDefault</span>;
};

const CanvasTabs: React.FC<{}> & {
  Default: typeof CanvasTabsDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasTabs.Default />
    </React.Fragment>
  );
};

CanvasTabs.Default = CanvasTabsDefault;
CanvasTabs.displayName = '@v2/Canvas.Tabs';
export { CanvasTabs };
