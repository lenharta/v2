import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createKeyDownGroup } from '@/utils';
import { Icon, Label } from '@/core';
import { useTabsContext } from '../TabsContext';
import { TABS_SELECTORS } from '../constants';

export type TabsItemFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.TabsItemProps;
  element: 'button';
}>;

export const TabsItem = Component<TabsItemFactory>(
  (
    {
      grow,
      size,
      value,
      variant,
      children,
      className,
      isLoading,
      isDisabled,
      isReadonly,
      iconRight,
      iconLeft,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const context = useTabsContext();

    const classNames = clsx(
      'v2-tabs-item',
      `v2-tabs-item--${size || context.size || 'md'}`,
      `v2-tabs-item--${variant || context.variant || 'default'}`,
      className
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      props.onClick?.(event);
      context.onChange(event.currentTarget.value);
    };

    const handleKeyDown = createKeyDownGroup({
      loop: context.keyboardOptions?.loop,
      orientation: context.orientation,
      childSelector: TABS_SELECTORS.item.key,
      parentSelector: TABS_SELECTORS.list.key,
      preventDefault: context.keyboardOptions?.preventDefault,
      onKeyDown: (event) => {
        context.keyboardOptions?.onKeyDown?.(event);
        onKeyDown?.(event);
      },
    });

    return (
      <button
        {...props}
        {...TABS_SELECTORS.item.prop}
        id={context.getItemId(value)}
        ref={ref}
        value={value}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={classNames}
        data-grow={grow || undefined}
        data-loading={isLoading || context.isLoading || undefined}
        data-disabled={isDisabled || context.isDisabled || undefined}
        data-readonly={isReadonly || context.isReadonly || undefined}
        data-selected={!!(context.value === value) || undefined}
      >
        <span className="v2-tabs-item-layout">
          {iconLeft && <Icon {...iconLeft} />}

          <Label className="v2-tabs-item-label" component="div">
            {children}
          </Label>

          {iconRight && <Icon {...iconRight} />}
        </span>
      </button>
    );
  }
);
