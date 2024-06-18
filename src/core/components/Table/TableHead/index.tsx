import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableHeadProps } from '../table-types';

type TableHeadFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'thead';
  props: TableHeadProps;
}>;

const TableHead = factory<TableHeadFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <thead ref={ref} className={css.head} {...forwardedProps}>
      {children}
    </thead>
  );
});

TableHead.displayName = '@v2/Table.Head';
export { TableHead };
