import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core';

import { css } from '../table-constants';
import { TableCellProps } from '../table-types';

type TableCellFactory = Factory.Config<{
  ref: HTMLTableCellElement;
  comp: 'td';
  props: TableCellProps;
}>;

const TableCell = factoryPolymorphic<TableCellFactory>((props, ref) => {
  const { children, component: Component = 'td', ...forwardedProps } = props;
  return (
    <Component ref={ref} className={css.cell} {...forwardedProps}>
      <span>{children}</span>
    </Component>
  );
});

TableCell.displayName = '@v2/Table.Cell';
export { TableCell };
