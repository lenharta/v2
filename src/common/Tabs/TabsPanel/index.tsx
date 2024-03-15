import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';

type TabsPanelBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface TabsPanelProps extends TabsPanelBaseProps {
  value: string;
  keepMounted?: string;
}

const defaultProps: Partial<TabsPanelProps> = {};

function _TabsPanel(props: TabsPanelProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { value, keepMounted, className, ...otherProps } = mergeProps(defaultProps, props);

  const ctx = useTabsCTX();
  const clxss = clsx('tabs-panel', className);
  const isActive = value === ctx.value;

  if (!isActive && !keepMounted) return null;

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      style={{ ...(keepMounted ? { display: 'none' } : {}) }}
    />
  );
}

export const TabsPanel = React.forwardRef(_TabsPanel) as React.ForwardRefExoticComponent<
  TabsPanelProps & React.RefAttributes<HTMLDivElement>
>;

TabsPanel.displayName = '@v2/Tabs.Panel';
