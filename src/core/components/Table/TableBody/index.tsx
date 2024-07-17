import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { TableBodyProps } from '../types';

type TableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: TableBodyProps;
}>;

const TableBody = createFactory<TableBodyFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <tbody ref={ref} className={clsx('v2-table-body', className)} {...forwardedProps}>
      {children}
    </tbody>
  );
});

TableBody.displayName = '@v2/Table.Body';
export { TableBody };
