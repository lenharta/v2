import clsx from 'clsx';
import * as React from 'react';
import { ButtonGroup } from './Group';
import { useButtonCTX } from './context';
import { UnstyledButton } from './Unstyled';
import { ButtonComponentType, ButtonRenderType } from './types';

const ButtonRender: ButtonRenderType = (props, ref) => {
  const {
    id,
    grow,
    size = 'sm',
    style,
    scheme = 'default',
    loading,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    excludeTabOrder,
    ...otherProps
  } = props;

  const ctx = useButtonCTX();

  const isSize = ctx.size || size;
  const isLoading = ctx.loading || loading;
  const isDisabled = ctx.disabled || disabled;

  const accessibleProps = {
    role: 'button',
    ...(!isLoading ? { 'aria-busy': true } : {}),
    ...(!isDisabled ? { 'aria-disabled': true } : {}),
    ...(!isDisabled && !excludeTabOrder ? { tabIndex: 0 } : {}),
    ...(typeof children === 'string' ? { 'aria-label': children } : {}),
  };

  const dataProps = {
    ...(grow ? { 'data-grow': true } : {}),
    ...(scheme ? { 'data-scheme': scheme } : {}),
    ...(isLoading ? { 'data-loading': true } : {}),
    ...(isDisabled ? { 'data-disabled': true } : {}),
  };

  return (
    <UnstyledButton
      {...otherProps}
      {...accessibleProps}
      {...dataProps}
      ref={ref}
      className={clsx('button', className)}
      style={{
        ...style,
        fontSize: `var(--button-height-${isSize})`,
        paddingInline: `var(--button-padding-x-${isSize})`,
      }}
    >
      {isLoading !== undefined ? (
        <span>Loading...</span>
      ) : (
        <span className="inner">
          {leftContent && <div data-position="left">{leftContent}</div>}
          {children && <div>{children}</div>}
          {rightContent && <div data-position="right">{rightContent}</div>}
        </span>
      )}
    </UnstyledButton>
  );
};

export const Button = React.forwardRef(ButtonRender) as ButtonComponentType;
Button.displayName = '@v2/Button';
Button.Group = ButtonGroup;
