import clsx from 'clsx';
import { ICON } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { useTabsContext } from '@/core/Tabs/context';
import { createEventCallback } from '@/utils';
import { useFocusProps, useResolvedLabel } from '@/core/hooks';

export interface TabsItemProps extends Core.BaseProps, Core.FocusProps {
  /** Defines the `value` of the tab item. This value will be compared to determine the active tab item. */
  value: string;

  /** Specifies a icon for the tab item, if the tab item is only provided a icon, the `aria-label` defaults to the tab item `value`  */
  icon?: ICON | undefined;

  /** Defines the content of the item element if no `children` are provided, if undefined defaults to item `value` */
  label?: string | undefined;

  /** Defines the content of the item element if no `label` is provided, if undefined defaults to item `value` */
  children?: React.ReactNode | undefined;
}

export type TabsItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TabsItemProps;
  omits: 'id';
}>;

export const TabsItem = factory<TabsItemFactory>((props, ref) => {
  const {
    value,
    label,
    disabled,
    tabIndex,
    children,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const ctx = useTabsContext();

  const isActive = ctx.value === value;
  const isDisabled = ctx.disabled || disabled;

  const focusProps = useFocusProps({
    disabled,
    tabIndex,
    excludeTabOrder,
    allowDisabledFocus,
  });

  const resolvedLabel = useResolvedLabel({
    ariaLabel: otherProps['aria-label'],
    children,
    label,
    value,
  });

  const accessibleProps = {
    ...focusProps,
    ...(isActive ? { 'aria-checked': true } : {}),
    ...(isDisabled ? { 'aria-disabled': true } : {}),
    ...(resolvedLabel ? { 'aria-label': resolvedLabel } : {}),
  };

  const dataProps = {
    ...(isActive ? { 'data-selected': true } : {}),
    ...(isDisabled ? { 'data-disabled': true } : {}),
  };

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (!isDisabled && event.key === 'Enter' && event.currentTarget.value) {
      event.stopPropagation();
      ctx.onChange(event.currentTarget.value);
    }
  });

  const handleClick = createEventCallback(otherProps.onClick, (event) => {
    if (!isDisabled && event.currentTarget.value) {
      event.stopPropagation();
      ctx.onChange(event.currentTarget.value);
    }
  });

  return (
    <button
      {...otherProps}
      {...dataProps}
      {...accessibleProps}
      id={ctx.getItemId()}
      className={clsx('tabs-item', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      value={value}
      role="tab"
      ref={ref}
    >
      {label || children || value}
    </button>
  );
});

TabsItem.displayName = '@v2/core/Tabs.Item';
