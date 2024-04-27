import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface TableRowProps {}

export type TableRowFactory = Factory.Config<{
  ref: HTMLTableRowElement;
  comp: 'tr';
  props: TableRowProps;
}>;

export const TableRow = factory<TableRowFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <tr {...forwardedProps} ref={ref} className={clsx('table-row', className)}>
      {children}
    </tr>
  );
});

TableRow.displayName = '@v2/core/Table.Row';
