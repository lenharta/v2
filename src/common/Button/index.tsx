import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonGroup } from './Group';
import { useButtonCTX } from './context';
import { Scheme, Size } from '@/types/common';
import { UnstyledButton, UnstyledButtonProps } from './Unstyled';

export type ButtonScheme = 'default' | Scheme;

export interface ButtonProps extends UnstyledButtonProps {
  size?: Size;
  scheme?: ButtonScheme;
  loading?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  scheme: 'default',
  size: 'sm',
};

function _Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    size,
    scheme,
    loading,
    disabled,
    className,
    leftContent,
    rightContent,
    children,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useButtonCTX();

  const clxss = clsx('button', `button--${size}`, `button--${scheme}`, className);

  const hasLeftContent = !!leftContent;
  const hasRightContent = !!rightContent;

  const isLoading = !disabled && loading;
  const isDisabled = disabled || isLoading;

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      className={clxss}
      tabIndex={isDisabled ? undefined : 0}
      aria-busy={isLoading}
      aria-disabled={!isDisabled ? undefined : isDisabled}
      data-disabled={!isDisabled ? undefined : isDisabled}
      data-loading={isLoading}
    >
      <span className="inner">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {hasLeftContent && <div data-position="left">{leftContent}</div>}
            {children && <div>{children}</div>}
            {hasRightContent && <div data-position="right">{rightContent}</div>}
          </>
        )}
      </span>
    </UnstyledButton>
  );
}

export const Button = React.forwardRef(_Button) as React.ForwardRefExoticComponent<ButtonProps> & {
  Group: typeof ButtonGroup;
};

Button.displayName = '@v2/Button';
Button.Group = ButtonGroup;
