import { Core } from '@/types';
import { createSafeContext } from '@/utils';

export const [TableProvider, useTableContext] = createSafeContext<Core.TableContext>(
  '[@v2/core/Table.context]: ERROR: could not locate component inside context tree.'
);
