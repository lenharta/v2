import { css } from './table-constants';
import { TableProps } from './table-types';
import { TableProvider } from './table-context';

import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableFoot } from './TableFoot';
import React from 'react';

type TableValue = string | number | readonly string[];

const Table: React.FC<TableProps> & {
  Row: typeof TableRow;
  Cell: typeof TableCell;
  Body: typeof TableBody;
  Head: typeof TableHead;
  Foot: typeof TableFoot;
} = (props) => {
  const { columns, rows, zebra } = props;
  const [values, setValues] = React.useState<number[]>([]);

  const calculateColumn = (value: TableValue, index: string) => {
    if (typeof value !== 'number') return;
    (rows ?? []).forEach((row, index) => {});
  };

  const uid = React.useId();

  const getTableId = {
    bodyRow: (id: string) => `body:row${uid}${id}`,
    bodyCell: (id: string) => `body:cell${uid}${id}`,
    headCell: (id: string) => `head:cell${uid}${id}`,
    footCell: (id: string) => `foot:cell${uid}${id}`,
  };

  return (
    <table className={css.root}>
      <TableProvider value={{ getTableId }}>
        <Table.Head>
          <Table.Row data-zebra={zebra}>
            {(columns ?? []).map((column) => (
              <Table.Cell component="th" key={column.id} children={column.label} />
            ))}
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {(rows ?? []).map((row) => (
            <Table.Row key={row.id} data-zebra={zebra}>
              <Table.Cell>{row.label}</Table.Cell>
              {(row.items ?? []).map((item) => (
                <Table.Cell key={row.id} children={item.label} component="td" />
              ))}
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Row></Table.Row>
      </TableProvider>
    </table>
  );
};

Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;
Table.Head = TableHead;
Table.Foot = TableFoot;
Table.displayName = '@v2/Table';
export { Table };
