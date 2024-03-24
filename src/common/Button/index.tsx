import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonGroup } from './Group';
import { useButtonCTX } from './context';
import { UnstyledButton } from './Unstyled';
import { createSurfaceToken, createTokenStyle } from '../tokens';
import { ButtonComponent, ButtonRenderType, ButtonProps } from './types';

const defaultProps: Partial<ButtonProps> = {
  surface: { level: 1, state: 'interactive', type: 'primary' },
  size: 'sm',
};

function findButtonLabel(props: Partial<ButtonProps>) {
  if (props['aria-label'] !== undefined) {
    return props['aria-label'];
  }
  if (typeof props.children === 'string') {
    return props.children as string;
  }
  return 'button';
}

const ButtonRender: ButtonRenderType = (props, ref) => {
  const {
    id,
    grow,
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

  const hasSize = ctx.size || size;
  const hasLoading = ctx.loading || loading;
  const hasDisabled = ctx.disabled || disabled;

  const isLoading = hasLoading !== undefined ? true : undefined;
  const isDisabled = hasDisabled !== undefined ? true : undefined;
  const isFocusable = !isDisabled && !excludeTabOrder ? true : undefined;
  const isFlexGrow = grow !== undefined ? true : undefined;

  const buttonLabel = findButtonLabel({ children, 'aria-label': otherProps['aria-label'] });

  const styles = React.useMemo(
    () => ({
      ...style,
      ...createTokenStyle({ key: 'button-height', prop: 'minHeight', value: hasSize }),
      ...createTokenStyle({ key: 'button-padding-x', prop: 'paddingInline', value: hasSize }),
    }),
    [ctx.size, size, style]
  );

  const clxss = React.useMemo(
    () =>
      clsx(
        'button',
        createSurfaceToken({
          ...surface,
          state: isDisabled ? 'disabled' : surface?.state,
        }),
        className
      ),
    [className, disabled, surface]
  );

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      role="button"
      style={styles}
      tabIndex={isFocusable ? 0 : -1}
      className={clxss}
      data-grow={isFlexGrow}
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
          {leftContent && <div data-position="left">{leftContent}</div>}
          {children && <div>{children}</div>}
          {rightContent && <div data-position="right">{rightContent}</div>}
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
