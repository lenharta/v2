import * as React from 'react';
import { Table } from '@/core';

const CanvasTableWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="v2-canvas-table-container">
    <div className="v2-canvas-table-layout">{children}</div>
  </div>
);

function generateCells(key: string, cols: number = 4) {
  const data = new Array(cols).fill('Cell Content');
  return [key, ...data].map((v, i) => <span key={i}>{v}</span>);
}

const SampleTableData = {
  head: [
    <span>Key</span>,
    <span>Col A</span>,
    <span>Col B</span>,
    <span>Col C</span>,
    <span>Col D</span>,
  ],
  body: [
    generateCells('Row 1'),
    generateCells('Row 2'),
    generateCells('Row 3'),
    generateCells('Row 4'),
    generateCells('Row 5'),
  ],
};

const CanvasTableDefault: React.FC<{}> = ({}) => (
  <CanvasTableWrapper>
    <Table data={SampleTableData} />
  </CanvasTableWrapper>
);

const CanvasTableStyled: React.FC<{}> = ({}) => (
  <CanvasTableWrapper>
    <Table className="v2-canvas-table-root" data={SampleTableData} />
  </CanvasTableWrapper>
);

const CanvasTable: React.FC<{}> & {
  Default: typeof CanvasTableDefault;
  Styled: typeof CanvasTableStyled;
} = ({}) => {
  return (
    <div>
      <CanvasTable.Styled />
      <CanvasTable.Default />
    </div>
  );
};

CanvasTable.Styled = CanvasTableStyled;
CanvasTable.Default = CanvasTableDefault;
CanvasTable.displayName = '@v2/Canvas.Table';
export { CanvasTable };
