import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory, Box, Divider } from '@/core';

import { css, selectors } from '../tabs-constants';
import { useTabsContext } from '../tabs-context';
import { TabsListProps } from '../tabs-types';

type TabsListFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsListProps;
}>;

const TabsList = factory<TabsListFactory>((props, ref) => {
  const { className, withDivider, children, dividerProps, ...forwardedProps } = props;

  const ctx = useTabsContext();

  return (
    <React.Fragment>
      <Box
        ref={ref}
        role="tablist"
        className={clsx(
          css.list,
          `${css.list}--scheme-${ctx.scheme}`,
          `${css.list}--variant-${ctx.variant}`,
          className
        )}
        aria-orientation={ctx.orientation}
        data-orientation={ctx.orientation}
        {...selectors.list.prop}
        {...forwardedProps}
      >
        {children}

        <div
          className={clsx(
            css.spacer,
            `${css.spacer}--scheme-${ctx.scheme}`,
            `${css.spacer}--variant-${ctx.variant}`,
            className
          )}
        />
      </Box>
      {withDivider && <Divider {...dividerProps} orientation={ctx.orientation} />}
    </React.Fragment>
  );
});

TabsList.displayName = '@v2/Tabs.List';
export { TabsList, type TabsListProps };
