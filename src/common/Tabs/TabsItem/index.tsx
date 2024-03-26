import clsx from 'clsx';
import * as React from 'react';
import { useTabsCTX } from '../context';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { TabsItemComponentType, TabsItemRenderType } from '../types';
import { createEventCallback } from '@/utils';

const TabsItemRender: TabsItemRenderType = (props, ref) => {
  const {
    size = 'sm',
    label,
    value,
    disabled,
    className,
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const ctx = useTabsCTX();

  const isActive = ctx.value !== value;
  const hasSize = ctx.size || size;
  const hasDisabled = ctx.disabled || disabled;

  const dataProps = {
    ...(isActive ? { 'data-active': true } : {}),
    ...(hasSize ? { 'data-size': hasSize } : {}),
  };

  const accessibleProps = {
    id: ctx.getTabItemId(),
    role: otherProps['role'] || 'tab',
    ...(!hasDisabled ? { tabIndex: otherProps['tabIndex'] || 0 } : {}),
    ...(hasDisabled ? { 'aria-disabled': true } : {}),
    ...(label ? { 'aria-label': label } : {}),
  };

  const handleClick = createEventCallback(otherProps.onClick, (event) => {
    if (!hasDisabled && event.currentTarget.value) {
      ctx.onChange(event.currentTarget.value);
    }
  });

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (!hasDisabled && event.currentTarget.value && event.key === 'Enter') {
      ctx.onChange(event.currentTarget.value);
    }
  });

  return (
    <UnstyledButton
      {...otherProps}
      {...dataProps}
      {...accessibleProps}
      className={clsx('tabs-item', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      value={value}
      ref={ref}
    >
      {leftContent && <div data-position="left">{leftContent}</div>}
      {label && <span className="label">{label}</span>}
      {rightContent && <div data-position="right">{rightContent}</div>}
    </UnstyledButton>
  );
};

export const TabsItem = React.forwardRef(TabsItemRender) as TabsItemComponentType;
TabsItem.displayName = '@v2/Tabs.Item';
