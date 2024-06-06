import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { TabsListProps } from '../types';
import { useTabsContext } from '../context';
import { factory, Box, Divider } from '@/core';

type TabsListFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsListProps;
}>;

const TabsList = factory<TabsListFactory>((props, ref) => {
  const { className, withDivider, dividerProps, ...forwardedProps } = props;

  const ctx = useTabsContext();

  return (
    <React.Fragment>
      <Box
        {...forwardedProps}
        aria-orientation={ctx.orientation}
        data-orientation={ctx.orientation}
        className={clsx('v2-tabs-list', className)}
        role="tablist"
        ref={ref}
      />
      {withDivider && <Divider {...dividerProps} orientation={ctx.orientation} />}
    </React.Fragment>
  );
});

TabsList.displayName = '@v2/Tabs.List';
export { TabsList, type TabsListProps };
