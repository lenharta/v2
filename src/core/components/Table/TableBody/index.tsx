import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from '../table-constants';
import { TableBodyProps } from '../table-types';

type TableBodyFactory = Factory.Config<{
  ref: HTMLTableSectionElement;
  comp: 'tbody';
  props: TableBodyProps;
}>;

const TableBody = factory<TableBodyFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <tbody ref={ref} className={css.body.root} {...forwardedProps}>
      {children}
    </tbody>
  );
});

TableBody.displayName = '@v2/Table.Body';
export { TableBody };
