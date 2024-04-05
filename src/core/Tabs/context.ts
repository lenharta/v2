import { createSafeContext } from '../utils';

export interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  getItemId: () => string;
  getPanelId: () => string;
  orientation: 'vertical' | 'horizontal' | undefined;
  keyboardActivated?: boolean | undefined;
  withDivider?: boolean | undefined;
  disabled?: boolean | undefined;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContextValue>(
  '[@v2/core/Tabs]: Component not found in context tree.'
);
