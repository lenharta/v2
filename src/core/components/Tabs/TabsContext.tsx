import { Core } from '@/types';
import { createSafeContext } from '@/utils';

export const [TabsProvider, useTabsContext] = createSafeContext<Core.TabsContext>(
  '[@v2/core/Tabs.Context]: ERROR: could not locate component in context tree.'
);
