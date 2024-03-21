import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';

type TabsListBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface TabsListProps extends TabsListBaseProps {}

const defaultProps: Partial<TabsListProps> = {};

function _TabsList(props: TabsListProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('tabs-list', className);
  const ctx = useTabsCTX();

  return (
    <div
      {...otherProps}
      ref={ref}
      className={clxss}
      data-orientation={ctx.orientation}
      aria-orientation={ctx.orientation}
    />
  );
}

export const TabsList = React.forwardRef(_TabsList) as React.ForwardRefExoticComponent<
  TabsListProps & React.RefAttributes<HTMLDivElement>
>;

TabsList.displayName = '@v2/TabsList';
