import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type TableHeadFactory = Core.Factory<{
  ref: HTMLTableSectionElement;
  props: Core.TableHeadProps;
  element: 'thead';
}>;

export const TableHead = Component<TableHeadFactory>(({ children, className, ...props }, ref) => {
  return (
    <thead ref={ref} className={clsx('v2-table-head', className)} {...props}>
      {children}
    </thead>
  );
});

TableHead.displayName = '@v2/Table.Head';
