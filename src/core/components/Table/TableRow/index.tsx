import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableRowProps } from '../table-types';

type TableRowFactory = Factory.Config<{
  ref: HTMLTableRowElement;
  comp: 'tr';
  props: TableRowProps;
}>;

const TableRow = factory<TableRowFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <tr ref={ref} className={css.row} {...forwardedProps}>
      {children}
    </tr>
  );
});

TableRow.displayName = '@v2/Table.Row';
export { TableRow };
