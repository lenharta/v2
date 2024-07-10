import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { TableProvider } from '../context';
import { TableRootProps } from '../types';

type TableRootFactory = Factory.Config<{
  ref: HTMLTableElement;
  comp: 'table';
  props: TableRootProps;
}>;

const TableRoot = createFactory<TableRootFactory>((props, ref) => {
  const { children, className, rowBorder, rowStriped, stickyHeader, ...forwardedProps } = props;
  return (
    <TableProvider value={{ rowBorder, rowStriped, stickyHeader }}>
      <table ref={ref} className={clsx('v2-table', className)} {...forwardedProps}>
        {children}
      </table>
    </TableProvider>
  );
});

TableRoot.displayName = '@v2/Table.Root';
export { TableRoot };
