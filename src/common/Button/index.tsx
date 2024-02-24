import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { type Size } from '@/types/common';
import { type UnstyledButtonProps, UnstyledButton } from './Unstyled';

// TODO: Properties - align & justify
// TODO: Properties - <Loader /> & loadingProps
// TODO: Properties - allowDisabledFocus?: boolean;

export type ButtonScheme = 'default' | 'inverted' | 'accent';

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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    scheme,
    loading,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const hasContentLeft = !!leftContent;
  const hasContentRight = !!rightContent;

  const mergedProps = mergeProps({ size, scheme }, defaultProps);

  const clxss = clsx(
    'Button',
    { [`Button--size-${mergedProps.size}`]: mergedProps.size },
    mergedProps.scheme,
    className
  );

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      className={clxss}
      tabIndex={disabled ? undefined : 0}
      aria-disabled={!disabled || !loading ? undefined : disabled}
      data-disabled={!disabled || !loading ? undefined : disabled}
    >
      {loading && <div>Loading...</div>}

      <span className="Button-inner">
        {hasContentLeft && (
          <div className="Button-content" data-position="left">
            {leftContent}
          </div>
        )}

        <div className="Button-label">{children}</div>

        {hasContentRight && (
          <div className="Button-content" data-position="right">
            {rightContent}
          </div>
        )}
      </span>
    </UnstyledButton>
  );
});
