import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface TableBodyProps {}

export type TableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: TableBodyProps;
}>;

export const TableBody = factory<TableBodyFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <tbody {...forwardedProps} ref={ref} className={clsx('table-body', className)}>
      {children}
    </tbody>
  );
});

TableBody.displayName = '@v2/core/Table.Body';
