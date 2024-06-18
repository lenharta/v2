import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableFootProps } from '../table-types';

type TableFootFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tfoot';
  props: TableFootProps;
}>;

const TableFoot = factory<TableFootFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <tfoot ref={ref} className={css.foot} {...forwardedProps}>
      {children}
    </tfoot>
  );
});

TableFoot.displayName = '@v2/Table.Foot';
export { TableFoot };
