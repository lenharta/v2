import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface TableHeadProps {}

export type TableHeadFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'thead';
  props: TableHeadProps;
}>;

export const TableHead = factory<TableHeadFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <thead {...forwardedProps} ref={ref} className={clsx('table-head', className)}>
      {children}
    </thead>
  );
});

TableHead.displayName = '@v2/core/Table.Head';
