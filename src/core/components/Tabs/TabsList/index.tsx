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
  ({ grow, withDivider, dividerProps, children, className, ...props }, ref) => {
    const context = useTabsContext();

    const isDivided = !!withDivider || !!dividerProps;

    const isDividedProps: Partial<Core.DividerProps> = isDivided
      ? {
          ...dividerProps,
          decoration: dividerProps?.decoration || 'solid',
          label: context.getListId(),
        }
      : {};

    return (
      <>
        <div
          id={context.getListId()}
          ref={ref}
          role="tablist"
          className={clsx('v2-tabs-list', className)}
          aria-orientation={context.orientation}
          data-orientation={context.orientation}
          data-grow={grow || context.grow || undefined}
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
