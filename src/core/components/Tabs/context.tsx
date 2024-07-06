import { TabsContext } from './types';
import { createSafeContext } from '@/utils';

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>(
  '[@v2/core/Tabs.Context]: ERROR: could not locate component in context tree.'
);
