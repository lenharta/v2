import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableThFactory = Core.Factory<{
  ref: HTMLTableCellElement;
  props: Core.TableThProps;
  element: 'th';
}>;

export const TableTh = Component<TableThFactory>(({ children, className, ...props }, ref) => {
  return (
    <th ref={ref} className={clsx('v2-table-th', className)} {...props}>
      {children}
    </th>
  );
});

TableTh.displayName = '@v2/Table.Th';
