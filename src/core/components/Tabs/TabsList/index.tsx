import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useTabsContext } from '../context';
import { Box, Divider, DividerProps } from '@/core/components';

interface TabsListProps {
  /** Defines additional props for the divider component. */
  dividerProps?: DividerProps | undefined;
  /** Defines a divider should be renderd between the tabslist and the tabpanel elements. */
  withDivider?: boolean | undefined;
}

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
