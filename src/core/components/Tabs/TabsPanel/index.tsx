import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { TabsPanelProps } from '../types';
import { useTabsContext } from '../context';

type TabsPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsPanelProps;
}>;

const TabsPanel = createFactory<TabsPanelFactory>((props, ref) => {
  const { value, style, className, keepMounted, children, ...forwardedProps } = props;

  const ctx = useTabsContext();

  const isSelected = !!(ctx.value === value) || undefined;

  const isMounted = isSelected && !!keepMounted;

  if (!isSelected && !keepMounted) {
    return null;
  }

  return (
    <div
      id={ctx.getPanelId(value)}
      ref={ref}
      role="tabpanel"
      className={clsx('v2-tabs-panel', className)}
      style={{
        ...style,
        ...(isMounted
          ? {
              display: 'none',
            }
          : {}),
      }}
      {...forwardedProps}
    >
      {children}
    </div>
  );
});

TabsPanel.displayName = '@v2/Tabs.Panel';
export { TabsPanel };
