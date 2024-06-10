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

const css = {
  list: 'v2-tabs-list',
  spacer: 'v2-tabs-list-spacer',
};

const TabsList = factory<TabsListFactory>((props, ref) => {
  const { className, withDivider, children, dividerProps, ...forwardedProps } = props;

  const ctx = useTabsContext();

  return (
    <React.Fragment>
      <Box
        {...forwardedProps}
        ref={ref}
        role="tablist"
        className={clsx(css.list, className)}
        aria-orientation={ctx.orientation}
        data-orientation={ctx.orientation}
      >
        {children}

        <div
          className={css.spacer}
          data-scheme={ctx.scheme?.replace('-interactive', '')}
          data-variant={ctx.variant}
        />
      </Box>
      {withDivider && <Divider {...dividerProps} orientation={ctx.orientation} />}
    </React.Fragment>
  );
});

TabsList.displayName = '@v2/Tabs.List';
export { TabsList, type TabsListProps };
