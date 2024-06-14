import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableHeadRowProps } from '../table-types';

type TableHeadRowFactory = Factory.Config<{
  ref: HTMLTableRowElement;
  comp: 'tr';
  props: TableHeadRowProps;
}>;

const TableHeadRow = factory<TableHeadRowFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return <tr ref={ref} className={css.head.root} {...forwardedProps}></tr>;
});

TableHeadRow.displayName = '@v2/Table.Head.Row';
export { TableHeadRow };
