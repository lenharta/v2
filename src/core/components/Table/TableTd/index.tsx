import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableTdFactory = Core.Factory<{
  ref: HTMLTableCellElement;
  props: Core.TableTdProps;
  element: 'td';
}>;

export const TableTd = Component<TableTdFactory>(({ children, className, ...props }, ref) => {
  return (
    <td ref={ref} className={clsx('v2-table-td', className)} {...props}>
      {children}
    </td>
  );
});

TableTd.displayName = '@v2/Table.Td';
