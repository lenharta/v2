import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';
import { useTabsContext } from '../context';

interface TabsPanelProps {
  value: string;
  style?: React.CSSProperties | undefined;
  keepMounted?: boolean | undefined;
}

type TabsPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsPanelProps;
}>;

const TabsPanel = factory<TabsPanelFactory>((props, ref) => {
  const { className, value, style, keepMounted, ...forwardedProps } = props;

  const ctx = useTabsContext();
  const isPanelSelected = ctx.value === value;
  const keepMountedStyles = !isPanelSelected && keepMounted ? { display: 'none' } : {};

  if (!isPanelSelected && !keepMounted) {
    return null;
  }

  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-tabs-panel', className)}
      style={{ ...style, ...keepMountedStyles }}
      role="tabpanel"
      ref={ref}
      id={ctx.getPanelId()}
    />
  );
});

TabsPanel.displayName = '@v2/Tabs.List';
export { TabsPanel, type TabsPanelProps };
