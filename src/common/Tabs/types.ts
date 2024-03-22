import * as React from 'react';
import {
  Size,
  Accent,
  Alignment,
  Orientation,
  ElementProps,
  ExoticComponent,
  ExoticRender,
  SurfaceConfig,
} from '@/types';

export interface TabsContextValue {
  size?: Size | undefined;
  grow?: boolean | undefined;
  value: string;
  onChange: (value: string) => void;
  accent?: Accent | undefined;
  surface?: SurfaceConfig;
  disabled?: boolean | undefined;
  elevated?: boolean | undefined;
  alignment?: Alignment | undefined;
  withDivider?: boolean | undefined;
  orientation?: Orientation | undefined;
}

export interface TabsRootProps {
  size?: Size | undefined;
  grow?: boolean | undefined;
  surface?: SurfaceConfig;
  children?: React.ReactNode | undefined;
  disabled?: boolean | undefined;
  elevated?: boolean | undefined;
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
  surface?: SurfaceConfig;
  elevated?: boolean | undefined;
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
