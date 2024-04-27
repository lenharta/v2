import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface TableCellProps {}

export type TableCellFactory = Factory.Config<{
  ref: HTMLTableCellElement;
  comp: 'td';
  props: TableCellProps;
}>;

export const TableCell = factory<TableCellFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <td {...forwardedProps} ref={ref} className={clsx('table-cell', className)}>
      {children}
    </td>
  );
});

TableCell.displayName = '@v2/core/Table.Cell';
