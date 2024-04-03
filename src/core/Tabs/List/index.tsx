import clsx from 'clsx';
import { Divider } from '@/core';
import { Core, factory } from '@/core/factory';
import { useTabsContext } from '../context';

// [TODO]: focus loop || keyboard activation

export interface TabsListProps {}

export type TabsListFactory = Core.Factory<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsListProps;
}>;

export const TabsList = factory<TabsListFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  const ctx = useTabsContext();
  return (
    <>
      <div
        {...otherProps}
        ref={ref}
        role="tablist"
        className={clsx('tabs-list', className)}
        aria-orientation={ctx.orientation}
      >
        {children}
      </div>
      {ctx.withDivider && <Divider />}
    </>
  );
});
