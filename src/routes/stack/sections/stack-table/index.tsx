import * as React from 'react';
import { Section, useStore } from '@/app';
import { StackTableHead } from './stack-table-head';
import { useStackTable } from './use-stack-table';

export type StackTableItem = {
  id: string;
  name: string;
  image: string;
  website: string;
  category: string;
  description: string;
};

export type StackTableBodyCellProps = {
  row: string;
  column: string;
  value: string;
};

export const StackTableBodyCell = (props: StackTableBodyCellProps) => {
  const { row, column, value } = props;

  let Component: React.ElementType = 'span';
  let ComponentProps = {};

  if (column === 'website') {
    Component = 'a';
    ComponentProps = {
      target: '_blank',
      href: value,
      rel: 'noopener',
    };
  }

  const dataProps = {
    'data-table-row': row,
    'data-table-column': column,
  };

  return (
    <td className="v2-stack-table-body-cell" {...dataProps}>
      <Component {...ComponentProps}>{value}</Component>
    </td>
  );
};

export const StackTableBodyRow = ({
  row,
  cells,
}: {
  row: string;
  cells: StackTableBodyCellProps[];
}) => {
  return (
    <tr className="v2-stack-table-body-row" data-table-row={row}>
      {cells.map((item) => (
        <StackTableBodyCell key={[row, item.column].join(':')} {...item} />
      ))}
    </tr>
  );
};

export type StackTableProps = {
  headers?: { label: string; column: string }[];
  rows: StackTableItem[];
};

export type StackTableComponent = {
  (props: StackTableProps): React.ReactNode;
  displayName?: string;
  // Head: typeof StackTableHead;
  // Body: typeof StackTableBody;
  // Foot: typeof StackTableFoot;
};

export const StackTable: StackTableComponent = ({ rows }) => {
  const { data, order, active, isActive, setDescending, setAscending } = useStackTable(rows);
  const store = useStore();

  return (
    <Section className="v2-stack-table-section">
      <div className="v2-stack-table-controls"></div>

      <table className="v2-stack-table">
        <StackTableHead
          order={order}
          store={store}
          active={active}
          isActive={isActive}
          setAscending={setAscending}
          setDescending={setDescending}
        />

        <tbody className="v2-stack-table-body">
          {data.map((item) => {
            return <StackTableBodyRow key={item.row} {...item} />;
          })}
        </tbody>
      </table>
    </Section>
  );
};
