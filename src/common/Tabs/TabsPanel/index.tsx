import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';
import { TabsPanelComponent, TabsPanelComponentRender, TabsPanelProps } from '../types';

const defaultProps: Partial<TabsPanelProps> = {};

const TabsPanelRender: TabsPanelComponentRender = (props, ref) => {
  const { className, keepMounted, value, ...otherProps } = mergeProps(defaultProps, props);

  const ctx = useTabsCTX();
  const isActive = ctx.value === value;

  if (!isActive && !keepMounted) {
    return null;
  }

  return (
    <div
      {...otherProps}
      ref={ref}
      role="tabpanel"
      style={{ display: !isActive && keepMounted ? 'none' : undefined }}
      className={clsx('tabs-panel', className)}
    />
  );
};

export const TabsPanel = React.forwardRef(TabsPanelRender) as TabsPanelComponent;
TabsPanel.displayName = '@v2/Tabs.Panel';
