import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { TableThProps } from '../types';

type TableThFactory = Factory.Config<{
  ref: HTMLTableCellElement;
  comp: 'td';
  props: TableThProps;
}>;

const TableTh = createFactory<TableThFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <th ref={ref} className={clsx('v2-table-th', className)} {...forwardedProps}>
      {children}
    </th>
  );
});

TableTh.displayName = '@v2/Table.Th';
export { TableTh };
