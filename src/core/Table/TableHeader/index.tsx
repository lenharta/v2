import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface TableHeaderProps {}

export type TableHeaderFactory = Factory.Config<{
  ref: HTMLTableCellElement;
  comp: 'th';
  props: TableHeaderProps;
}>;

export const TableHeader = factory<TableHeaderFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <th {...forwardedProps} ref={ref} className={clsx('table-header', className)}>
      {children}
    </th>
  );
});

TableHeader.displayName = '@v2/core/Table.Header';
