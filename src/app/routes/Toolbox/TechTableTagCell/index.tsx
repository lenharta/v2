import { Table } from '@/core';
import { Store } from '@/types';

interface TechTableTagCellProps {
  items?: string[] | undefined;
  color?: Store.Accent | undefined;
}

export const TechTableTagCell = (props: TechTableTagCellProps) => {
  const { items = [], color = 'blue' } = props;
  return (
    <Table.Cell className="tech-table-cell">
      <div className="tech-table-tag-cell">
        {items.map((item) => (
          <div
            key={item}
            className="tech-table-tag-cell-item"
            children={item}
            style={{
              backgroundColor: `rgba(var(--c-${color}-alpha), 0.1)`,
              color: `rgba(var(--c-${color}-alpha), 0.9)`,
            }}
          />
        ))}
      </div>
    </Table.Cell>
  );
};
