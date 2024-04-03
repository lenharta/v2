import clsx from 'clsx';
import { ICON } from '@/core';
import { getAriaLabel } from '@/core/utils';
import { useFocusIndex } from '@/core/hooks';
import { Core, factory } from '@/core/factory';
import { useTabsContext } from '../context';
import { createEventCallback } from '@/utils';

export interface TabsItemProps {
  /** Defines the `value` of the tab item. This value will be compared to determine the active tab item. */
  value: string;

  /** Specifies a icon for the tab item, if the tab item is only provided a icon, the `aria-label` defaults to the tab item `value`  */
  icon?: ICON | undefined;

  /** Defines the content of the item element if no `children` are provided, if undefined defaults to item `value` */
  label?: string | undefined;

  /** Defines the content of the item element if no `label` is provided, if undefined defaults to item `value` */
  children?: React.ReactNode | undefined;

  /** Defines a index for tabbing the item element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the item element. */
  disabled?: boolean | undefined;

  /** Defines if the item element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Defines if the item element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;
}

export type TabsItemFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TabsItemProps;
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
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const ctx = useTabsContext();

  let isActive = ctx.value === value;
  let isDisabled = ctx.disabled || disabled;

  let focusProps = useFocusIndex({
    disabled,
    tabIndex,
    excludeTabOrder,
    allowDisabledFocus,
  });

  let accessibleProps = {
    ...focusProps,
    ...(isActive ? { 'aria-checked': true } : {}),
    ...(isDisabled ? { 'aria-disabled': true } : {}),
    ...getAriaLabel({
      ariaLabel,
      children,
      label,
      value,
    }),
  };

  let dataProps = {
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
