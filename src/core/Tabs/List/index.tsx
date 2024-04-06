import clsx from 'clsx';
import * as React from 'react';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { useTabsContext } from '@/core/Tabs/context';
import { Divider, DividerProps } from '@/core';

export interface TabsListProps extends Core.BaseProps {
  /** Defines additional props for the divider component. */
  dividerProps?: DividerProps | undefined;

  /** Defines a divider should be renderd between the tabslist and the tabpanel elements. */
  withDivider?: boolean | undefined;
}

export type TabsListFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: TabsListProps;
}>;

export const TabsList = factory<TabsListFactory>((props, ref) => {
  const { children, className, dividerProps, withDivider, ...otherProps } = props;

  const ctx = useTabsContext();
  const a11yProps = { role: 'tablist', 'aria-orientation': ctx.orientation };

  return (
    <React.Fragment>
      <div {...otherProps} {...a11yProps} className={clsx('tabs-list', className)} ref={ref}>
        {children}
      </div>
      {withDivider && <Divider {...dividerProps} />}
    </React.Fragment>
  );
});
