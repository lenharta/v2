import * as React from 'react';
import { TabsRootComponent, TabsRootProps } from './types';
import { TabsProvider } from './context';
import { TabsItem } from './TabsItem';
import { TabsList } from './TabsList';
import { TabsPanel } from './TabsPanel';
import { mergeProps } from '@/utils';

const defaultProps: Partial<TabsRootProps> = {
  alignment: 'default',
};

export const Tabs: TabsRootComponent = (props) => {
  const { children, defaultValue, orientation, disabled, size, alignment, grow } = mergeProps(
    defaultProps,
    props
  );
  const [value, onChange] = React.useState(defaultValue ?? '');
  return (
    <TabsProvider value={{ orientation, value, onChange, disabled, size, alignment, grow }}>
      <React.Fragment>{children}</React.Fragment>
    </TabsProvider>
  );
};

Tabs.displayName = '@v2/Tabs.Root';
Tabs.Root = Tabs;
Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;

// import { TabsProvider } from './context';
// import { Orientation, SizeExpanded } from '@/types/common';
// import { TabsItem } from './TabsItem';
// import { TabsPanel } from './TabsPanel';
// import { TabsList } from './TabsList';

// export interface TabsProps {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void;
//   children: React.ReactNode;
//   orientation?: Orientation;
//   size?: SizeExpanded;
// }

// interface TabsComponents {
//   Item: typeof TabsItem;
//   List: typeof TabsList;
//   Panel: typeof TabsPanel;
// }

// const defaultProps: Partial<TabsProps> = {
//   orientation: 'horizontal',
//   size: 'sm',
// };

// export const Tabs: React.FC<TabsProps> & TabsComponents = (props) => {
//   const { value, children, onChange, size, orientation } = mergeProps(defaultProps, props);
//   return <TabsProvider value={{ value, onChange, size, orientation }}>{children}</TabsProvider>;
// };

// Tabs.displayName = '@v2/Tabs';
// Tabs.Item = TabsItem;
// Tabs.List = TabsList;
// Tabs.Panel = TabsPanel;
