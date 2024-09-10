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
  ({ variant, value, style, className, keepMounted, children, ...props }, ref) => {
    const context = useTabsContext();

    const isSelected = !!(context.value === value) || undefined;

    const isMounted = isSelected && !!keepMounted;

    if (!isSelected && !keepMounted) return null;

    const classNames = clsx(
      'v2-tabs-panel',
      `v2-tabs-panel--${variant || context.variant || 'default'}`,
      className
    );

    return (
      <div
        {...props}
        id={context.getPanelId(value)}
        style={{ ...style, ...(isMounted ? { display: 'none' } : {}) }}
        className={classNames}
        role="tabpanel"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

TabsPanel.displayName = '@v2/Tabs.Panel';
