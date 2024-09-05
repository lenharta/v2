import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';
import { useTabsContext } from '../TabsContext';

export type TabsPanelFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.TabsPanelProps;
  element: 'div';
}>;

export const TabsPanel = PolymorphicComponent<TabsPanelFactory>(
  ({ value, style, className, keepMounted, children, ...props }, ref) => {
    const ctx = useTabsContext();

    const isSelected = !!(ctx.value === value) || undefined;

    const isMounted = isSelected && !!keepMounted;

    if (!isSelected && !keepMounted) return null;

    return (
      <div
        {...props}
        id={ctx.getPanelId(value)}
        style={{ ...style, ...(isMounted ? { display: 'none' } : {}) }}
        className={clsx('v2-tabs-panel', className)}
        role="tabpanel"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

TabsPanel.displayName = '@v2/Tabs.Panel';
