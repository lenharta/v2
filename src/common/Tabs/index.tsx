import * as React from 'react';
import { mergeProps } from '@/utils';
import { TabsProvider } from './context';
import { Orientation, SizeExpanded } from '@/types/common';
import { TabsItem } from './TabsItem';
import { TabsPanel } from './TabsPanel';
import { TabsList } from './TabsList';

export interface TabsProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  orientation?: Orientation;
  size?: SizeExpanded;
}

interface TabsComponents {
  Item: typeof TabsItem;
  List: typeof TabsList;
  Panel: typeof TabsPanel;
}

const defaultProps: Partial<TabsProps> = {
  orientation: 'horizontal',
  size: 'sm',
};

export const Tabs: React.FC<TabsProps> & TabsComponents = (props) => {
  const { value, children, onChange, size, orientation } = mergeProps(defaultProps, props);
  return <TabsProvider value={{ value, onChange, size, orientation }}>{children}</TabsProvider>;
};

Tabs.displayName = '@v2/Tabs';
Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Panel = TabsPanel;
