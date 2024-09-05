import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableTrFactory = Core.Factory<{
  ref: HTMLTableRowElement;
  props: Core.TableTrProps;
  element: 'tr';
}>;

export const TableTr = Component<TableTrFactory>(({ children, className, ...props }, ref) => {
  return (
    <tr ref={ref} className={clsx('v2-table-tr', className)} {...props}>
      {children}
    </tr>
  );
});

TableTr.displayName = '@v2/Table.Tr';
