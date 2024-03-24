import * as React from 'react';
import { useThemeCTX } from '@/store';
import { mergeProps } from '@/utils';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { TabsProvider } from './context';
import { TabsRootComponent, TabsRootProps } from './types';

const defaultProps: Partial<TabsRootProps> = {
  alignment: 'start',
  size: 'md',
};

export const Tabs: TabsRootComponent = (props) => {
  const { size, grow, children, disabled, alignment, withDivider, orientation, defaultValue } =
    mergeProps(defaultProps, props);

  const ctx = useThemeCTX();
  const [value, onChange] = React.useState(defaultValue ?? '');

  return (
    <TabsProvider
      value={{
        size,
        grow,
        value,
        onChange,
        disabled,
        alignment,
        withDivider,
        orientation,
        accent: ctx.state.accent,
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
