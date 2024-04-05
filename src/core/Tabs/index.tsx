import * as React from 'react';
import { TabsList } from './List';
import { TabsItem } from './Item';
import { TabsPanel } from './Panel';
import { TabsProvider } from './context';

export interface TabsProps {
  value?: string | undefined;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  withDivider?: boolean | undefined;
  orientation?: 'vertical' | 'horizontal' | undefined;
  defaultValue?: string | undefined;
  keyboardActivated?: boolean | undefined;
  onChange?: ((value: string) => void) | undefined;
}

export type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabsList;
  Item: typeof TabsItem;
  Panel: typeof TabsPanel;
};

export const Tabs: TabsComponent = (props) => {
  const {
    disabled,
    children,
    withDivider,
    defaultValue,
    keyboardActivated,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  const [_value, _onChange] = React.useState(props.defaultValue || '');
  const onChange = (_onChange || otherProps.onChange) as (value: string) => void;
  const value = (_value || otherProps.value) as string;

  const renderId = React.useId();
  const getPanelId = () => `tabs${renderId}panel`;
  const getItemId = () => `tabs${renderId}item`;

  return (
    <TabsProvider
      value={{
        value,
        disabled,
        withDivider,
        keyboardActivated,
        orientation,
        getPanelId,
        getItemId,
        onChange,
      }}
    >
      {props.children}
    </TabsProvider>
  );
};

Tabs.displayName = '@v2/core/Tabs';
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;
Tabs.Item = TabsItem;
