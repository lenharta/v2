import * as React from 'react';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { TabsProvider } from './context';
import { TabsComponentType } from './types';

export const Tabs: TabsComponentType = (props) => {
  const {
    grow,
    size = 'md',
    children,
    disabled,
    alignment = 'start',
    withDivider = true,
    orientation = 'horizontal',
    defaultValue,
  } = props;

  const [value, onChange] = React.useState(defaultValue ?? '');

  const uid = React.useId();
  const getTabItemId = () => `tabs${uid}item`;
  const getTabPanelId = () => `tabs${uid}panel`;

  return (
    <TabsProvider
      value={{
        size,
        grow,
        value,
        onChange,
        getTabItemId,
        getTabPanelId,
        disabled,
        alignment,
        withDivider,
        orientation,
      }}
    >
      <React.Fragment>{children}</React.Fragment>
    </TabsProvider>
  );
};

Tabs.displayName = '@v2/Tabs.Root';
Tabs.Root = Tabs;
Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
