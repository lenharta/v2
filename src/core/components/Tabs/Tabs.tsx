import * as React from 'react';
import { Core } from '@/types';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { TabsProvider } from './TabsContext';
import clsx from 'clsx';

export type TabsFactory = React.FC<Core.TabsProps> & {
  Item: typeof TabsItem;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
};

export const Tabs: TabsFactory = (props) => {
  const {
    size,
    grow,
    value,
    variant,
    children,
    className,
    isLoading,
    isDisabled,
    isReadonly,
    orientation,
    keyboardOptions,
    keyboardActivated,
    onChange,
  } = props;

  const uid = React.useId();
  const getListId: () => string = () => `tabs${uid}list`;
  const getItemId: (v: string) => string = (v: string) => `tabs${uid}item:${v}`;
  const getPanelId: (v: string) => string = (v: string) => `tabs${uid}panel:${v}`;

  return (
    <div className={clsx('v2-tabs', className)} data-orientation={orientation}>
      <TabsProvider
        value={{
          size,
          grow,
          value,
          variant,
          isLoading,
          isDisabled,
          isReadonly,
          orientation: orientation || 'horizontal',
          keyboardActivated: keyboardActivated || false,
          keyboardOptions,
          getPanelId,
          getItemId,
          getListId,
          onChange,
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
