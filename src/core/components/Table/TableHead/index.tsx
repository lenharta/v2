import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { TableHeadProps } from '../types';

type TableHeadFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'thead';
  props: TableHeadProps;
}>;

const TableHead = createFactory<TableHeadFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <thead ref={ref} className={clsx('v2-table-head', className)} {...forwardedProps}>
      {children}
    </thead>
  );
});

TableHead.displayName = '@v2/Table.Head';
export { TableHead };
