import { Table } from '@/core';
import { Store } from '@/types';

interface TechTableColorCellProps {
  color?: Store.Accent | undefined;
  style?: React.CSSProperties | undefined;
}

export const TechTableColorCell = (props: TechTableColorCellProps) => {
  const { style, color = 'blue' } = props;
  return (
    <Table.Cell className="tech-table-cell">
      <div
        className="tech-table-color-cell"
        style={{ ...style, backgroundColor: `rgba(var(--c-${color}-alpha), 0.9)` }}
      />
    </Table.Cell>
  );
};
