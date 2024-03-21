import * as React from 'react';
import { IconName } from '../Icon';
import {
  Size,
  Alignment,
  Orientation,
  ElementProps,
  ExoticRender,
  ExoticComponent,
  SurfaceVariant,
} from '@/types';

export interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  orientation?: Orientation;
  alignment?: 'default' | Alignment;
  disabled?: boolean;
  elevated?: boolean;
  variant?: SurfaceVariant;
  grow?: boolean;
  size?: Size;
}

export interface TabsItemDataObj {
  value: string | number;
  label?: string | undefined;
  icon?: IconName | undefined;
  disabled?: boolean | undefined;
}

export interface TabsItemDataObjParsed {
  value: string;
  label: string;
  icon?: IconName | undefined;
  disabled?: boolean | undefined;
}

export type ParseTabsItem = (item: TabsItemDataObj) => TabsItemDataObjParsed;
export type ParseTabsItemData = (data?: TabsItemDataObj[]) => TabsItemDataObjParsed[];

export interface TabsRootProps {
  children?: React.ReactNode;
  activateWithKeyboard?: boolean;
  variant?: SurfaceVariant;
  elevated?: boolean;
  orientation?: Orientation;
  defaultValue?: string;
  alignment?: 'default' | Alignment;
  disabled?: boolean;
  grow?: boolean;
  size?: Size;
}

export interface TabsItemProps extends Omit<ElementProps<'button'>, 'children'> {
  size?: Size;
  value: string;
  label?: string;
  variant?: SurfaceVariant;
  elevated?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export interface TabsListProps extends ElementProps<'div'> {
  orientation?: Orientation;
  alignment?: 'default' | Alignment;
  grow?: boolean;
}

export interface TabsPanelProps extends ElementProps<'div'> {
  keepMounted?: boolean;
  value: string;
}

export type TabsItemComponentRender = ExoticRender<HTMLButtonElement, TabsItemProps>;
export type TabsListComponentRender = ExoticRender<HTMLDivElement, TabsListProps>;
export type TabsPanelComponentRender = ExoticRender<HTMLDivElement, TabsPanelProps>;

export type TabsItemComponent = ExoticComponent<HTMLButtonElement, TabsItemProps>;
export type TabsListComponent = ExoticComponent<HTMLDivElement, TabsListProps>;
export type TabsPanelComponent = ExoticComponent<HTMLDivElement, TabsPanelProps>;

export type TabsRootComponent = React.FC<TabsRootProps> & TabsComponents;

export interface TabsComponents {
  Root: TabsRootComponent;
  Item: TabsItemComponent;
  List: TabsListComponent;
  Panel: TabsPanelComponent;
}
