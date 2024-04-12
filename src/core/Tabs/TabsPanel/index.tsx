import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { factory } from '@/core/factory';
import { useTabsContext } from '../context';

export interface TabsPanelProps extends Core.BaseProps {
  /** Defines a unique value to be match with a corresponding item. */
  value: string;

  /** Determines if the panel should be removed from the DOM when deactivated. */
  keepMounted?: boolean | undefined;

  /** Defines inline styles for the panel element. */
  style?: React.CSSProperties | undefined;
}

export type TabsPanelFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsPanelProps;
}>;

export const TabsPanel = factory<TabsPanelFactory>((props, ref) => {
  const { value, style, keepMounted, className, children, ...otherProps } = props;

  const ctx = useTabsContext();
  const isActive = ctx.value === value;
  const hiddenStyles = !isActive && keepMounted ? { display: 'none' } : {};

  const a11yProps = {
    id: ctx.getPanelId(),
    role: 'tabpanel',
  };

  if (!isActive && !keepMounted) {
    return null;
  }

  return (
    <div
      {...otherProps}
      {...a11yProps}
      className={clsx('tabs-panel', className)}
      style={{ ...style, ...hiddenStyles }}
      ref={ref}
    >
      {children}
    </div>
  );
});
