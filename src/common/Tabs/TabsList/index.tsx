import clsx from 'clsx';
import * as React from 'react';

import { Divider } from '@/common';
import { mergeProps } from '@/utils';
import { useMergeRefs } from '@/hooks';
import { createEventCallback } from '@/utils';

import { useTabsCTX } from '../context';
import { TabsListProps, TabsListComponent, TabsListComponentRender } from '../types';

const defaultProps: Partial<TabsListProps> = {};

function createKeydownScope<T extends Element>({ element }: { element?: T | null }) {
  return (event: React.KeyboardEvent<T>) => {
    console.log(event);
    if (element) {
      console.log(element);
    }
  };
}

const TabsListRender: TabsListComponentRender = (props, ref) => {
  const { className, orientation, grow, alignment, ...otherProps } = mergeProps(
    defaultProps,
    props
  );

  const listRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergeRefs(ref, listRef);
  const ctx = useTabsCTX();

  const isFlexGrow = (ctx.grow || grow) !== undefined ? true : undefined;
  const hasAlignment = ctx.alignment || alignment;
  const hasOrientation = ctx.orientation || orientation;

  return (
    <>
      <div
        {...otherProps}
        ref={refs}
        role="tablist"
        className={clsx('tabs-list', className)}
        aria-orientation={hasOrientation}
        data-orientation={hasOrientation}
        data-alignment={hasAlignment}
        data-grow={isFlexGrow}
        onKeyDownCapture={createKeydownScope({ element: listRef.current })}
      />
      <Divider accent={ctx.accent} />
    </>
  );
};

export const TabsList = React.forwardRef(TabsListRender) as TabsListComponent;
TabsList.displayName = '@v2/Tabs.List';
