import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { TableFootProps } from '../types';

type TableFootFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tfoot';
  props: TableFootProps;
}>;

const TableFoot = createFactory<TableFootFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <tfoot ref={ref} className={clsx('v2-table-foot', className)} {...forwardedProps}>
      {children}
    </tfoot>
  );
});

TableFoot.displayName = '@v2/Table.Foot';
export { TableFoot };
