import * as React from 'react';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { TabsProps } from './types';
import { TabsProvider } from './context';

type TabsFactory = React.FC<TabsProps> & {
  Item: typeof TabsItem;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
};

const Tabs: TabsFactory = (props) => {
  const {
    value,
    variant,
    loading,
    disabled,
    readOnly,
    children,
    orientation,
    keyboardActivated,
    keyboardOptions,
    onValueChange,
  } = props;

  const uid = React.useId();
  const getListId: () => string = () => `tabs${uid}list`;
  const getItemId: (v: string) => string = (v: string) => `tabs${uid}item:${v}`;
  const getPanelId: (v: string) => string = (v: string) => `tabs${uid}panel:${v}`;

  return (
    <div className="v2-tabs" data-orientation={orientation}>
      <TabsProvider
        value={{
          value,
          variant: variant || 'base-default',
          loading,
          disabled,
          readOnly,
          orientation: orientation || 'horizontal',
          keyboardActivated: keyboardActivated || false,
          keyboardOptions,
          onValueChange,
          getPanelId,
          getItemId,
          getListId,
        }}
      >
        {children}
      </TabsProvider>
    </div>
  );
};

Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
Tabs.displayName = '@v2/Tabs';
export { Tabs };
