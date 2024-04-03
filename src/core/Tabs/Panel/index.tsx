import clsx from 'clsx';
import { Core, factory } from '@/core/factory';
import { useTabsContext } from '../context';

export interface TabsPanelProps {
  value: string;
  style?: React.CSSProperties | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
  keepMounted?: boolean | undefined;
}

export type TabsPanelFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsPanelProps;
}>;

export const TabsPanel = factory<TabsPanelFactory>((props, ref) => {
  const { value, style, keepMounted, className, children, ...otherProps } = props;

  const ctx = useTabsContext();

  let isActive = ctx.value === value;
  let isHidden = !isActive && keepMounted;
  let isUnmounted = !isActive && !keepMounted;

  let styles = {
    ...style,
    ...(isHidden ? { display: 'none' } : {}),
  };

  if (isUnmounted) {
    return null;
  }

  return (
    <div
      {...otherProps}
      id={ctx.getPanelId()}
      className={clsx('tabs-panel', className)}
      style={styles}
      role="tabpanel"
      ref={ref}
    >
      {children}
    </div>
  );
});
