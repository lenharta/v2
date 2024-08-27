import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { TableTdProps } from '../types';

type TableTdFactory = Factory.Config<{
  ref: HTMLTableCellElement;
  comp: 'td';
  props: TableTdProps;
}>;

const TableTd = createFactory<TableTdFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <td ref={ref} className={clsx('v2-table-td', className)} {...forwardedProps}>
      {children}
    </td>
  );
});

TableTd.displayName = '@v2/Table.Td';
export { TableTd };
