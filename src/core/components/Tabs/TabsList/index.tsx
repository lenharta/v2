import clsx from 'clsx';
import { Core } from '@/types';
import { Divider } from '@/core';
import { Component } from '@/factory';
import { useTabsContext } from '../TabsContext';
import { TABS_SELECTORS } from '../constants';

export type TabsListFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.TabsListProps;
  element: 'div';
}>;

export const TabsList = Component<TabsListFactory>(
  ({ withDivider, dividerProps, children, className, ...props }, ref) => {
    const ctx = useTabsContext();

    const isDivided = !!withDivider || !!dividerProps;

    const isDividedProps: Partial<Core.DividerProps> = isDivided
      ? {
          ...dividerProps,
          decoration: dividerProps?.decoration || 'solid',
          label: ctx.getListId(),
        }
      : {};

    return (
      <>
        <div
          id={ctx.getListId()}
          ref={ref}
          role="tablist"
          className={clsx('v2-tabs-list', className)}
          data-orientation={ctx.orientation}
          aria-orientation={ctx.orientation}
          {...TABS_SELECTORS.list.prop}
          {...props}
        >
          {children}
        </div>
        {isDivided && <Divider {...isDividedProps} />}
      </>
    );
  }
);

TabsList.displayName = '@v2/Tabs.List';
