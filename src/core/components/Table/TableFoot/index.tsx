import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableFootFactory = Core.Factory<{
  ref: HTMLTableSectionElement;
  props: Core.TableFootProps;
  element: 'tfoot';
}>;

export const TableFoot = Component<TableFootFactory>(({ children, className, ...props }, ref) => {
  return (
    <tfoot ref={ref} className={clsx('v2-table-foot', className)} {...props}>
      {children}
    </tfoot>
  );
});

TableFoot.displayName = '@v2/Table.Foot';
