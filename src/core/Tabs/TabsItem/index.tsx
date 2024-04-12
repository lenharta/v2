import clsx from 'clsx';
import { ICON } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { useTabsContext } from '@/core/Tabs/context';
import { createEventCallback } from '@/utils';

export interface TabsItemProps extends Core.BaseProps, Core.FocusProps {
  /** Defines a unique value to be match with a corresponding panel.  */
  value: string;

  /** Defines the name for the icon to be rendered. If not provided, no icon will be rendered. */
  icon?: ICON | undefined;

  /** Defines the label for the tab item. */
  label?: string | undefined;

  /** Specifies the position of the icon relative to the label. */
  iconPosition?: 'left' | 'right';
}

export type TabsItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TabsItemProps;
  omits: 'id' | 'children';
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

  const tabContent = label || children || value;

  const a11yProps = {
    id: ctx.getItemId(),
    role: 'tab',
    'aria-label': otherProps['aria-label'],
    'aria-checked': isActive,
    'aria-disabled': isDisabled,
  };

  const dataProps = {
    'data-selected': isActive,
    'data-disabled': isDisabled,
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
      {...a11yProps}
      className={clsx('tabs-item', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      value={value}
      ref={ref}
    >
      {tabContent}
    </button>
  );
});

TabsItem.displayName = '@v2/core/Tabs.Item';
