import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useTabsCTX } from '../context';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/common/utils';
import { createSurfaceToken, createTokenStyle } from '@/common/tokens';
import { TabsItemComponent, TabsItemComponentRender, TabsItemProps } from '../types';

const defaultProps: Partial<TabsItemProps> = {
  surface: { type: 'primary', state: 'base', level: 0 },
};

const TabsItemRender: TabsItemComponentRender = (props, ref) => {
  const {
    size,
    value,
    label,
    style,
    surface,
    elevated,
    disabled,
    className,
    leftContent,
    rightContent,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useTabsCTX();

  const isActive = ctx.value !== value ? true : undefined;
  const isElevated = (ctx.elevated || elevated) !== undefined ? true : undefined;
  const isDisabled = (ctx.disabled || disabled) !== undefined ? true : undefined;

  const hasSize = ctx.size || size;
  const hasContentLeft = !leftContent ? undefined : true;
  const hasContentRight = !rightContent ? undefined : true;

  const clxss = React.useMemo(
    () =>
      clsx(
        'tabs-item',
        createSurfaceToken({
          type: surface!.type,
          state: 'interactive',
          level: isElevated ? 1 : 0,
        }),
        className
      ),
    [surface, ctx.elevated, elevated, className]
  );

  const styles = React.useMemo(
    () => ({
      ...style,
      ...createTokenStyle({ key: 'tabs-item-height', prop: 'minHeight', value: hasSize }),
      ...createTokenStyle({ key: 'tabs-item-padding-x', prop: 'paddingInline', value: hasSize }),
    }),
    [ctx.size, size, style]
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    return !isDisabled ? ctx.onChange(event.currentTarget.value) : undefined;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    return event.key === 'Enter' && !disabled ? ctx.onChange(event.currentTarget.value) : undefined;
  };

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      role="tab"
      value={value}
      style={styles}
      tabIndex={isDisabled ? -1 : 0}
      className={clxss}
      aria-label={label}
      aria-disabled={isDisabled}
      data-active={isActive}
      data-disabled={isDisabled}
      onClick={createEventCallback(otherProps.onClick, handleClick)}
      onKeyDown={createEventCallback(otherProps.onKeyDown, handleKeyDown)}
    >
      {hasContentLeft && <div data-position="left">{leftContent}</div>}
      <span className="tab-item-label">{label}</span>
      {hasContentRight && <div data-position="right">{rightContent}</div>}
    </UnstyledButton>
  );
};

export const TabsItem = React.forwardRef(TabsItemRender) as TabsItemComponent;
TabsItem.displayName = '@v2/Tabs.Item';
