import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableBodyFactory = Core.Factory<{
  ref: HTMLTableSectionElement;
  props: Core.TableBodyProps;
  element: 'tbody';
}>;

export const TableBody = Component<TableBodyFactory>(({ children, className, ...props }, ref) => {
  return (
    <tbody ref={ref} className={clsx('v2-table-body', className)} {...props}>
      {children}
    </tbody>
  );
});

TableBody.displayName = '@v2/Table.Body';
