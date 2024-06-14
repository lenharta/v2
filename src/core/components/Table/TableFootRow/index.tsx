import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableFootRowProps } from '../table-types';

type TableFootRowFactory = Factory.Config<{
  ref: HTMLTableRowElement;
  comp: 'tr';
  props: TableFootRowProps;
}>;

const TableFootRow = factory<TableFootRowFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <tr ref={ref} className={css.foot.root} {...forwardedProps}></tr>;
});

TableFootRow.displayName = '@v2/Table.Foot.Row';
export { TableFootRow };
