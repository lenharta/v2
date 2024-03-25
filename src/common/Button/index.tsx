import clsx from 'clsx';
import * as React from 'react';
import { ButtonGroup } from './Group';
import { useButtonCTX } from './context';
import { UnstyledButton } from './Unstyled';
import { createSurface, parseTokenData } from '@/utils';
import { ButtonComponentType, ButtonRenderType } from './types';

const ButtonRender: ButtonRenderType = (props, ref) => {
  const {
    id,
    grow,
    size = 'sm',
    style,
    surface,
    loading,
    disabled,
    elevated,
    children,
    className,
    leftContent,
    rightContent,
    excludeTabOrder,
    ...otherProps
  } = props;

  const ctx = useButtonCTX();

  const hasSize = (ctx.size || size) ?? undefined;
  const hasSurface = (ctx.surface || surface) ?? undefined;
  const hasLoading = (ctx.loading || loading) ?? undefined;
  const hasDisabled = (ctx.disabled || disabled) ?? undefined;
  const hasElevated = (ctx.elevated || elevated) ?? undefined;

  const isFlexGrow = grow !== undefined ? true : undefined;
  const isLoading = hasLoading !== undefined ? true : undefined;
  const isDisabled = hasDisabled !== undefined ? true : undefined;
  const isElevated = hasElevated !== undefined ? true : undefined;
  const isFocusable = !isDisabled && !excludeTabOrder ? true : undefined;
  const isLabelable = typeof children !== 'string' ? undefined : children;

  const styles = React.useMemo(
    () => ({
      ...style,
      ...parseTokenData([
        { key: 'button-height', prop: 'height', value: hasSize },
        { key: 'button-padding-x', prop: 'paddingInline', value: hasSize },
      ]),
    }),
    [style, ctx.size, size]
  );

  const clxss = React.useMemo(
    () =>
      clsx(
        'button',
        createSurface({
          type: hasSurface?.type || 'primary-1',
          state: hasSurface?.state || 'interactive',
          disabled: isDisabled,
          elevated: isElevated,
        }),
        className
      ),
    [className, disabled, elevated, surface, ctx.disabled, ctx.elevated, ctx.surface]
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
      aria-label={isLabelable ?? otherProps['aria-label']}
      aria-busy={isLoading}
    >
      {isLoading ? (
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
