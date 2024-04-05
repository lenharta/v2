import { Core, Factory } from '@/types';
import { factory } from '../factory';
import { useNavigate } from 'react-router-dom';
import { getAriaLabel } from '../utils';
import { useFocusIndex } from '../hooks';
import { createEventCallback } from '@/utils';
import clsx from 'clsx';
import React from 'react';

export interface ButtonProps extends Core.BaseProps, Core.FocusProps, Core.AriaLabelProps {
  /** Defines a unique global identifier for the element. */
  id?: string | undefined;

  /** Specifies the destination urk for the element. */
  url?: string | undefined;

  /** Specifies the size of the element. */
  size?: Core.Size5;

  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;

  /** A string representing the a value for the element. */
  value?: string | undefined;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal';

  /** Indicates a `loading` state for the element. */
  loading?: boolean | undefined;

  /** Content placed to the `left` of the label.*/
  leftContent?: React.ReactNode | undefined;

  /** Content placed to the `right` of the label.*/
  rightContent?: React.ReactNode | undefined;
}

export type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const {
    url,
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
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const navigate = useNavigate();
  const labelProps = getAriaLabel({ ariaLabel, children, label, value });
  const focusProps = useFocusIndex({ tabIndex, disabled, excludeTabOrder, allowDisabledFocus });

  const isDisabled = disabled !== undefined;
  const isLoading = !isDisabled && loading !== undefined;
  const modifiers = [`action--${variant}`, `action--size-${size}`];

  const accessibleProps = {
    role: otherProps['role'] || 'button',
    ...(isDisabled ? { 'aria-disabled': true } : {}),
    ...(isLoading ? { 'aria-busy': true } : {}),
    ...focusProps,
    ...labelProps,
  };

  const handleClick = createEventCallback(otherProps.onClick, (event) => {
    if (url !== undefined) {
      event.stopPropagation();
      navigate(url);
    }
  });

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (url !== undefined) {
      event.stopPropagation();
      navigate(url);
    }
  });

  return (
    <button
      {...otherProps}
      {...accessibleProps}
      className={clsx('button', modifiers, className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={ref}
    >
      <span className="inner" style={{ ...(isLoading ? { opacity: 0.5 } : {}) }}>
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