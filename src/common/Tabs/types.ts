import * as React from 'react';
import { Size, Alignment, Orientation, ElementProps, ExoticRender, ExoticComponent } from '@/types';

export interface TabsContextValue {
  size?: Size | undefined;
  grow?: boolean | undefined;
  value: string;
  disabled?: boolean | undefined;
  alignment?: Alignment | undefined;
  withDivider?: boolean | undefined;
  orientation?: Orientation | undefined;
  getTabPanelId: () => string;
  getTabItemId: () => string;
  onChange: (value: string) => void;
}

export interface TabsRootProps {
  size?: Size | undefined;
  grow?: boolean | undefined;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  alignment?: Alignment | undefined;
  withDivider?: boolean | undefined;
  orientation?: Orientation | undefined;
  defaultValue?: string | undefined;
  activateWithKeyboard?: boolean | undefined;
}

export interface TabsItemProps extends Omit<ElementProps<'button'>, 'children'> {
  size?: Size | undefined;
  value: string | undefined;
  label?: string | undefined;
  disabled?: boolean | undefined;
  leftContent?: React.ReactNode | undefined;
  rightContent?: React.ReactNode | undefined;
}

export interface TabsListProps extends ElementProps<'div'> {
  withDivider?: boolean | undefined;
  orientation?: Orientation | undefined;
  alignment?: Alignment | undefined;
  grow?: boolean | undefined;
}

export interface TabsPanelProps extends ElementProps<'div'> {
  keepMounted?: boolean | undefined;
  value: string;
}

export type TabsItemRenderType = ExoticRender<HTMLButtonElement, TabsItemProps>;
export type TabsListRenderType = ExoticRender<HTMLDivElement, TabsListProps>;
export type TabsPanelRenderType = ExoticRender<HTMLDivElement, TabsPanelProps>;

export type TabsItemComponentType = ExoticComponent<HTMLButtonElement, TabsItemProps>;
export type TabsListComponentType = ExoticComponent<HTMLDivElement, TabsListProps>;
export type TabsPanelComponentType = ExoticComponent<HTMLDivElement, TabsPanelProps>;

export type TabsComponentType = React.FC<TabsRootProps> & TabsComponents;

export interface TabsComponents {
  Root: TabsComponentType;
  Item: TabsItemComponentType;
  List: TabsListComponentType;
  Panel: TabsPanelComponentType;
}
