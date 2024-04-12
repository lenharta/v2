import * as React from 'react';
import { TabsList } from './TabsList';
import { TabsItem } from './TabsItem';
import { TabsPanel } from './TabsPanel';
import { TabsProvider } from './context';
import { Core } from '@/types';

export interface TabsProps {
  /** Defines a unique value to be match with a tab with its corresponding item. (controlled) */
  value?: string | undefined;

  /** The content available to the tabs context. */
  children?: React.ReactNode | undefined;

  /** Indicates if the entire tabslist should have a disabled state. */
  disabled?: boolean | undefined;

  /** Defines the directional layout of the tablist. */
  orientation?: Core.Orientation;

  /** Specifies the tab value that should be initially mounted. (uncontrolled) */
  defaultValue?: string | undefined;

  /** Specifies if the tabs can be activated with keyboard events. */
  keyboardActivated?: boolean | undefined;

  /** Defines a state handler to match a tab with its corresponding item. (controlled) */
  onChange?: ((value: string) => void) | undefined;
}

export type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabsList;
  Item: typeof TabsItem;
  Panel: typeof TabsPanel;
};

export const Tabs: TabsComponent = (props) => {
  const {
    value: controlledValue,
    onChange: controlledChange,
    children,
    disabled,
    orientation = 'horizontal',
    defaultValue,
    keyboardActivated,
  } = props;

  const uid = React.useId();
  const getItemId = () => `tabs${uid}item`;
  const getPanelId = () => `tabs${uid}panel`;

  const [uncontrolledValue, uncontrolledChange] = React.useState(defaultValue || '');
  const onChange = (uncontrolledChange || controlledChange) as (value: string) => void;
  const value = (uncontrolledValue || controlledValue) as string;

  return (
    <TabsProvider
      value={{
        value,
        disabled,
        orientation,
        keyboardActivated,
        getPanelId,
        getItemId,
        onChange,
      }}
    >
      {children}
    </TabsProvider>
  );
};

Tabs.displayName = '@v2/core/Tabs';
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;
Tabs.Item = TabsItem;
