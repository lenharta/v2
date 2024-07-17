import { TableContext } from './types';
import { createSafeContext } from '@utils';

const [TableProvider, useTableContext] = createSafeContext<TableContext>(
  '[@v2/core/Table.context]: ERROR: could not locate component inside context tree.'
);

export { TableProvider, useTableContext };
