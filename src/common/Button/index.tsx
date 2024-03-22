import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonGroup } from './Group';
import { useButtonCTX } from './context';
import { UnstyledButton } from './Unstyled';
import { createSurfaceToken, createTokenStyle } from '../tokens';
import { ButtonComponent, ButtonComponentRender, ButtonProps } from './types';

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
};

const ButtonRender: ButtonComponentRender = (props, ref) => {
  const {
    id,
    size,
    style,
    loading,
    surface,
    disabled,
    children,
    className,
    leftContent,
    rightContent,
    excludeTabOrder,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useButtonCTX();

  const isLoading = ctx.loading !== undefined || loading !== undefined ? true : undefined;
  const isDisabled = ctx.disabled !== undefined || disabled !== undefined ? true : undefined;
  const isFocusable = !isDisabled && !excludeTabOrder ? true : undefined;

  const hasSize = ctx.size || size;
  const hasLeftContent = leftContent !== undefined ? true : undefined;
  const hasRightContent = rightContent !== undefined ? true : undefined;

  let buttonLabel: string | undefined;

  if (typeof children === 'string') {
    buttonLabel = children;
  }
  if (otherProps['aria-label'] !== undefined) {
    buttonLabel = otherProps['aria-label'];
  }

  const styles = React.useMemo(
    () => ({
      ...style,
      ...createTokenStyle({ key: 'button-height', prop: 'height', value: hasSize }),
      ...createTokenStyle({ key: 'button-padding-x', prop: 'paddingInline', value: hasSize }),
    }),
    [ctx.size, size, style]
  );

  const clxss = React.useMemo(
    () =>
      clsx(
        'button',
        createSurfaceToken({
          type: surface?.type || 'primary',
          level: !isDisabled && surface?.level ? surface?.level : 1,
          state: !isDisabled ? 'interactive' : 'disabled',
        }),
        className
      ),
    [surface, disabled, className]
  );

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      role="button"
      style={styles}
      className={clxss}
      tabIndex={isFocusable ? 0 : -1}
      data-loading={isLoading}
      data-disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={buttonLabel}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <Button.Loader />
      ) : (
        <span className="inner">
          {hasLeftContent && <div data-position="left">{leftContent}</div>}
          {children && <div>{children}</div>}
          {hasRightContent && <div data-position="right">{rightContent}</div>}
        </span>
      )}
    </UnstyledButton>
  );
};

export const Button = React.forwardRef(ButtonRender) as ButtonComponent;

Button.Loader = ({}) => {
  return <p className="button-loader">Loading...</p>;
};

Button.displayName = '@v2/Button';
Button.Group = ButtonGroup;
