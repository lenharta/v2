import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { createKeyDownGroup } from '@/utils';
import { Icon, UnstyledButton } from '@/core';
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
      `v2-tabs-item--${variant || context.variant || 'default'}`,
      className
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      props.onClick?.(event);
      context.onValueChange(event.currentTarget.value);
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
      <UnstyledButton
        {...props}
        {...TABS_SELECTORS.item.prop}
        id={context.getItemId(value)}
        ref={ref}
        value={value}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={classNames}
        data-loading={isLoading || context.isLoading}
        data-disabled={isDisabled || context.isDisabled}
        data-readonly={isReadonly || context.isReadonly}
        data-selected={!!(context.value === value)}
      >
        <div className="v2-tabs-item-layout">
          {iconLeft && <Icon {...iconLeft} />}

          <div className="v2-tabs-item">{children}</div>

          {iconRight && <Icon {...iconRight} />}
        </div>
      </UnstyledButton>
    );
  }
);
