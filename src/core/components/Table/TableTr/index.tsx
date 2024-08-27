import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { TableTrProps } from '../types';

type TableTrFactory = Factory.Config<{
  ref: HTMLTableRowElement;
  comp: 'tr';
  props: TableTrProps;
}>;

const TableTr = createFactory<TableTrFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <tr ref={ref} className={clsx('v2-table-tr', className)} {...forwardedProps}>
      {children}
    </tr>
  );
});

TableTr.displayName = '@v2/Table.Tr';
export { TableTr };
