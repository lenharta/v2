import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
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
  } = props;

  const ctx = useButtonCTX();
  const _props = mergeProps({ size, scheme, loading, disabled }, defaultProps, ctx);

  const hasLeftContent = !!leftContent;
  const hasRightContent = !!rightContent;

  const isLoading = !_props.disabled && _props.loading;
  const isDisabled = _props.disabled || isLoading;

  const clxss = clsx('button', `button--${_props.size}`, `button--${_props.scheme}`, className);

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

export type ButtonComponent = React.ForwardRefExoticComponent<ButtonProps>;
export const Button = React.forwardRef(_Button) as ButtonComponent;

// TODO: Props - align & justify
// TODO: Props - <Loader /> & loadingProps
// TODO: Props - allowDisabledFocus?: boolean;
