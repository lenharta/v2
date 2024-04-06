import clsx from 'clsx';
import * as React from 'react';
import { factory } from '@/core/factory';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@/core/Button/Group';
import { Core, Factory } from '@/types';
import { createEventCallback, isEmptyObject } from '@/utils';
import { useFocusProps, useResolvedLabel } from '@/core/hooks';
import { useButtonGroup } from './context';

export interface ButtonProps extends Core.BaseProps, Core.FocusProps, Core.AriaLabelProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;

  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;

  /** A string representing the a value for the element. */
  value?: string | undefined;

  /** Indicates a `loading` state for the element. */
  loading?: boolean | undefined;

  /** Content placed to the `left` of the label.*/
  leftContent?: React.ReactNode | undefined;

  /** Content placed to the `right` of the label.*/
  rightContent?: React.ReactNode | undefined;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal';

  /** Specifies the size of the element. */
  size?: Core.Size5;
}

export type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    value,
    label,
    variant = 'default',
    loading,
    disabled,
    tabIndex,
    children,
    className,
    leftContent,
    rightContent,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const ctx = useButtonGroup();

  const isDisabled = ctx.disabled || disabled;
  const isLoading = (ctx.loading || loading) && !isDisabled;

  const buttonRole = otherProps['role'] || 'button';
  const buttonSizeMod = ctx.size || size;
  const buttonVariantMod = ctx.variant || variant;

  const focusProps = useFocusProps({
    tabIndex,
    disabled: isDisabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  const resolvedLabel = useResolvedLabel({
    ariaLabel: otherProps['aria-label'],
    children,
    label,
    value,
  });

  const a11yProps = {
    role: buttonRole,
    'aria-busy': isLoading,
    'aria-label': resolvedLabel,
    'aria-disabled': isDisabled,
    ...focusProps,
  };

  const dataProps = {
    'data-loading': isLoading,
  };

  return (
    <button
      {...otherProps}
      {...a11yProps}
      {...dataProps}
      ref={ref}
      className={clsx(
        'button',
        `button--${buttonVariantMod}`,
        `button--size-${buttonSizeMod}`,
        className
      )}
    >
      <span className="inner">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <React.Fragment>
            {leftContent && <div data-position="left">{leftContent}</div>}
            {children && <div>{children}</div>}
            {rightContent && <div data-position="right">{rightContent}</div>}
          </React.Fragment>
        )}
      </span>
    </button>
  );
});

Button.displayName = '@v2/core/Button';
Button.Group = ButtonGroup;
