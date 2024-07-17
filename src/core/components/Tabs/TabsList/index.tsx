import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { Divider, DividerProps } from '@core';
import { useTabsContext } from '../context';
import { TabsListProps } from '../types';
import { TABS_SELECTORS } from '../constants';
import React from 'react';

type TabsListFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsListProps;
}>;

const TabsList = createFactory<TabsListFactory>((props, ref) => {
  const { withDivider, dividerProps, children, className, ...forwardedProps } = props;

  const ctx = useTabsContext();

  const isDivided = !!withDivider || !!dividerProps;

  const isDividedProps: Partial<DividerProps> = isDivided
    ? {
        ...dividerProps,
        decoration: dividerProps?.decoration || 'solid',
        label: ctx.getListId(),
      }
    : {};

  return (
    <React.Fragment>
      <div
        id={ctx.getListId()}
        ref={ref}
        role="tablist"
        className={clsx('v2-tabs-list', className)}
        data-orientation={ctx.orientation}
        aria-orientation={ctx.orientation}
        {...TABS_SELECTORS.list.prop}
        {...forwardedProps}
      >
        {children}
      </div>
      {isDivided && <Divider {...isDividedProps} />}
    </React.Fragment>
  );
});

TabsList.displayName = '@v2/Tabs.List';
export { TabsList };
