import clsx from 'clsx';
import * as React from 'react';
import { Divider } from '@/common';
import { useMergeRefs } from '@/hooks';
import { useTabsCTX } from '../context';
import { TabsListComponentType, TabsListRenderType } from '../types';

const TabsListRender: TabsListRenderType = (props, ref) => {
  const {
    grow,
    alignment = 'start',
    className,
    withDivider = true,
    orientation = 'horizontal',
    ...otherProps
  } = props;

  const listRef = React.useRef<HTMLDivElement>(null);
  const refs = useMergeRefs(ref, listRef);
  const ctx = useTabsCTX();

  const hasFlexGrow = ctx.grow || grow;
  const hasAlignment = ctx.alignment || alignment;
  const hasOrientation = ctx.orientation || orientation;

  const dataProps = {
    ...(hasFlexGrow ? { 'data-grow': true } : {}),
    ...(hasAlignment ? { 'data-alignment': true } : {}),
  };

  const accessibleProps = {
    role: otherProps['role'] || 'tablist',
    ...(hasOrientation ? { 'aria-orientation': orientation } : {}),
  };

  return (
    <>
      <div
        {...otherProps}
        {...accessibleProps}
        {...dataProps}
        className={clsx('tabs-list', className)}
        ref={refs}
      />
      {withDivider && <Divider size="sm" />}
    </>
  );
};

export const TabsList = React.forwardRef(TabsListRender) as TabsListComponentType;
TabsList.displayName = '@v2/Tabs.List';
