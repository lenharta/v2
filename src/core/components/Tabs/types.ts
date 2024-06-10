import { Theme } from '@/types';
import { DividerProps } from '../Divider';

interface TabsContext {
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

  scheme?: Theme.Scheme | undefined;

  variant?: 'default' | 'elevated';

  /** Specifies if the tabs can be activated with keyboard events. */
  keyboardActivated?: boolean | undefined;

  /** Indicates if the entire tabslist should have a disabled state. */
  disabled?: boolean | undefined;
}

interface TabsProps {
  value?: string | undefined;
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated';
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  orientation?: Theme.Orientation;
  defaultValue?: string | undefined;
  keyboardActivated?: boolean | undefined;
  onChange?: ((value: string) => void) | undefined;
}

interface TabsItemProps {
  label: string;
  value: string;
  scheme?: Theme.Scheme | undefined;
  variant?: 'default' | 'elevated';
  disabled?: boolean | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

interface TabsListProps {
  /** Defines additional props for the divider component. */
  dividerProps?: DividerProps | undefined;
  /** Defines a divider should be renderd between the tabslist and the tabpanel elements. */
  withDivider?: boolean | undefined;
}

interface TabsPanelProps {
  value: string;
  style?: React.CSSProperties | undefined;
  keepMounted?: boolean | undefined;
}

export type { TabsProps, TabsItemProps, TabsListProps, TabsPanelProps, TabsContext };
