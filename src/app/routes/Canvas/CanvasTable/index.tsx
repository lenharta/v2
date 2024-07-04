import * as React from 'react';

const CanvasTableDefault: React.FC<{}> = ({}) => {
  return <span>CanvasTableDefault</span>;
};

const CanvasTable: React.FC<{}> & {
  Default: typeof CanvasTableDefault;
} = ({}) => {
  return (
    <React.Fragment>
      <CanvasTable.Default />
    </React.Fragment>
  );
};

CanvasTable.Default = CanvasTableDefault;
CanvasTable.displayName = '@v2/Canvas.Table';
export { CanvasTable };
