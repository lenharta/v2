import { createSafeContext } from '../utils';

export interface TabsThemeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  align?: 'start' | 'center' | 'end' | undefined;
  justify?: 'start' | 'center' | 'end' | undefined;
}

export interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean | undefined;
  withDivider?: boolean | undefined;
  keyboardActivated?: boolean | undefined;
  orientation: 'vertical' | 'horizontal' | undefined;
  getPanelId: () => string;
  getItemId: () => string;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContextValue>(
  '[@v2/core/Tabs]: Component not found in context tree.'
);
