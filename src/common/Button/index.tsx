import clsx from 'clsx';
import * as React from 'react';
import { Scheme } from '@/types/common';
import { mergeProps } from '@/utils';
import { useButtonCTX } from './context';
import { UnstyledButton, UnstyledButtonProps } from './Unstyled';

export interface ButtonProps extends UnstyledButtonProps {
  scheme?: Scheme;
  loading?: boolean;
  disabled?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const defaultProps: Partial<ButtonProps> = {
  scheme: 'primary',
};

function _Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const {
    scheme,
    loading,
    disabled,
    className,
    leftContent,
    rightContent,
    children,
    ...otherProps
  } = props;

  const hasLeftContent = !!leftContent;
  const hasRightContent = !!rightContent;

  const ctx = useButtonCTX();
  const _props = mergeProps({ scheme, loading, disabled }, defaultProps, ctx);

  const clxss = clsx('button', scheme, className);
  const isLoading = !_props.disabled && _props.loading;
  const isDisabled = _props.disabled || isLoading;

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      className={clxss}
      tabIndex={!isDisabled ? 0 : -1}
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
