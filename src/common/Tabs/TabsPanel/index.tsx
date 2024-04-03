import clsx from 'clsx';
import * as React from 'react';
import { useTabsContext } from '../context';
import { TabsPanelComponentType, TabsPanelRenderType } from '../types';

const TabsPanelRender: TabsPanelRenderType = (props, ref) => {
  const { className, keepMounted, value, style, ...otherProps } = props;

  const ctx = useTabsContext();
  const isActive = ctx.value === value;

  if (!isActive && !keepMounted) {
    return null;
  }

  const accessibleProps = {
    id: ctx.getTabPanelId(),
    role: otherProps['role'] || 'tabpanel',
  };

  return (
    <div
      {...otherProps}
      {...accessibleProps}
      className={clsx('tabs-panel', className)}
      style={{ ...style, display: !isActive && keepMounted ? 'none' : undefined }}
      ref={ref}
    />
  );
};

export const TabsPanel = React.forwardRef(TabsPanelRender) as TabsPanelComponentType;
TabsPanel.displayName = '@v2/Tabs.Panel';
