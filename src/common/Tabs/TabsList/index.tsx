import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';
import {
  TabsListProps,
  ParseTabsItem,
  ParseTabsItemData,
  TabsListComponent,
  TabsListComponentRender,
} from '../types';
import { createEventCallback } from '@/common/utils';
import { useMergeRefs } from '@/hooks';
import { Divider } from '@/common';

const parseTabsItem: ParseTabsItem = (item) => {
  if (!item.label) {
    return {
      ...item,
      value: (item.value as number).toString(),
      label: (item.value as number).toString(),
    };
  }
  return {
    ...item,
    value: (item.value as number).toString(),
    label: item.label,
  };
};

const parseTabsItemData: ParseTabsItemData = (data) => {
  return !data ? [] : data.map(parseTabsItem);
};

const defaultProps: Partial<TabsListProps> = {
  alignment: 'default',
};

const TabsListRender: TabsListComponentRender = (props, ref) => {
  const { className, orientation, grow, alignment, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const ctx = useTabsCTX();
  const groupRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergeRefs(ref, groupRef);
  return (
    <>
      <div
        {...otherProps}
        ref={refs}
        role="tablist"
        className={clsx('tabs-list', className)}
        data-orientation={ctx.orientation || orientation}
        aria-orientation={ctx.orientation || orientation}
        data-grow={!grow ? undefined : true}
        data-alignment={alignment}
        onKeyDownCapture={createEventCallback(otherProps.onKeyDownCapture, (event) => {
          const groupNode = groupRef.current!;
          console.log(groupNode);
        })}
      />
      <Divider />
    </>
  );
};

export const TabsList = React.forwardRef(TabsListRender) as TabsListComponent;
TabsList.displayName = '@v2/Tabs.List';
