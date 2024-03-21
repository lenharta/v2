import clsx from 'clsx';
import * as React from 'react';
import { Text } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/common/utils';
import { createSurface, mergeProps } from '@/utils';
import { TabsItemComponent, TabsItemComponentRender, TabsItemProps } from '../types';
import { useTabsCTX } from '../context';

const defaultProps: Partial<TabsItemProps> = {};

const TabsItemRender: TabsItemComponentRender = (props, ref) => {
  const {
    size,
    value,
    label,
    variant,
    elevated,
    disabled,
    className,
    leftContent,
    rightContent,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useTabsCTX();

  const isActive = ctx.value !== value ? undefined : true;
  const isDisabled = !ctx.disabled || !disabled ? undefined : true;

  const hasContentLeft = !leftContent ? undefined : true;
  const hasContentRight = !rightContent ? undefined : true;

  const surface = React.useMemo(
    () =>
      createSurface({
        variant: variant,
        state: 'interactive',
        level: !elevated ? 0 : 1,
      }),
    [elevated, variant]
  );

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      role="tab"
      value={value}
      aria-label={label}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      className={clsx('tabs-item', surface, className)}
      data-active={isActive}
      data-disabled={isDisabled}
      onClick={createEventCallback(otherProps.onClick, (event) => {
        if (!isDisabled) {
          ctx.onChange(event.currentTarget.value);
        }
      })}
      onKeyDown={createEventCallback(otherProps.onKeyDown, (event) => {
        if (event.key === 'Enter' && !isDisabled) {
          ctx.onChange(event.currentTarget.value);
        }
      })}
    >
      {hasContentLeft && <div data-position="left">{leftContent}</div>}
      <Text>{label}</Text>
      {hasContentRight && <div data-position="right">{rightContent}</div>}
    </UnstyledButton>
  );
};

export const TabsItem = React.forwardRef(TabsItemRender) as TabsItemComponent;
TabsItem.displayName = '@v2/Tabs.Item';
