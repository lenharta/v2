import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../factory';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';

interface TableProps {}

export type TableFactory = Factory.Config<{
  ref: HTMLTableElement;
  comp: 'table';
  props: TableProps;
  comps: {
    Row: typeof TableRow;
    Cell: typeof TableCell;
    Body: typeof TableBody;
    Head: typeof TableHead;
    Header: typeof TableHeader;
  };
}>;

export const Table = factory<TableFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <table {...forwardedProps} ref={ref} className={clsx('table', className)}>
      {children}
    </table>
  );
});

Table.displayName = '@v2/Table';
Table.Header = TableHeader;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Row = TableRow;
