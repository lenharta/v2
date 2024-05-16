import { createSafeContext } from '@/core/utils';

export interface TabsContextValue {
  /** Defines a unique value to be match with a tab with its corresponding item. */
  value: string;

  /** Defines a state handler to match a tab with its corresponding item. */
  onChange: (value: string) => void;

  /** Defines a handler access a tab's unique render identifier. */
  getItemId: () => string;

  /** Defines a handler access a panel's unique render identifier. */
  getPanelId: () => string;

  /** Defines the directional layout of the tablist. */
  orientation: 'vertical' | 'horizontal' | undefined;

  /** Specifies if the tabs can be activated with keyboard events. */
  keyboardActivated?: boolean | undefined;

  /** Indicates if the entire tabslist should have a disabled state. */
  disabled?: boolean | undefined;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContextValue>(
  '[@v2/core/components/Tabs]: Component not found in context tree.'
);
