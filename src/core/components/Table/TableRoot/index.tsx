import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { TableProvider } from '../TableContext';

export type TableRootFactory = Core.Factory<{
  ref: HTMLTableElement;
  props: Core.TableRootProps;
  element: 'table';
}>;

export const TableRoot = Component<TableRootFactory>(
  ({ children, className, rowBorder, rowStriped, stickyHeader, ...props }, ref) => {
    return (
      <TableProvider value={{ rowBorder, rowStriped, stickyHeader }}>
        <table ref={ref} className={clsx('v2-table', className)} {...props}>
          {children}
        </table>
      </TableProvider>
    );
  }
);

TableRoot.displayName = '@v2/Table.Root';
