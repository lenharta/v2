import { TabsContext } from '../tabs-types';
import { createSafeContext } from '@/core';

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContext>(
  '[@v2/core/components/Tabs]: Component not found in context tree.'
);
