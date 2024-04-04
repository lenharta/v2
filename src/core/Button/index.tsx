import clsx from 'clsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { createEventCallback } from '@/utils';
import { Core, factory } from '../factory';
import { useFocusIndex } from '../hooks';
import { getAriaLabel } from '../utils';

export interface ButtonProps {
  /**
   * Defines a unique global identifier for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   * @default undefined
   */
  id?: string | undefined;
  /**
   * - Specifies the `internal` destination for the `Button`.
   * - If provided the button will navigate to the `internal url` destination.
   * - The `navigate()` function will run concurrent with any provided event handlers.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href
   * @see https://reactrouter.com/en/main/components/link
   * @see {LinkProps.variant}
   * @default undefined
   */
  url?: string | undefined;
  /**
   * Defines a shorthand property `aria-label` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default 'action'
   */
  label?: string | undefined;
  /**
   * A string representing the `Button` value.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
   * @default undefined
   */
  value?: string | undefined;
  /**
   * Specifies a index for the `Button` tab order, if provided any other focusable props are ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  tabIndex?: number | undefined;
  /**
   * Indicates a `disabled` state for the `Button`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Specifies if the element should be ignored in the current tab order.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  excludeTabOrder?: boolean | undefined;
  /**
   * Defines if the element should be focused when `disabled` state is provided.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  allowDisabledFocus?: boolean | undefined;
  /**
   * Defines the content of the `Button`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Button` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
  /**
   * Indicates a `loading` state for the `Button`.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy
   * @default undefined
   */
  loading?: boolean | undefined;
  /**
   * Content placed to the `left` of `Button` label.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined;
   */
  leftContent?: React.ReactNode | undefined;
  /**
   * Content placed to the `left` of `Button` label.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined;
   */
  rightContent?: React.ReactNode | undefined;
}

export type ButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const {
    id,
    url,
    value,
    label,
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

  let isDisabled = disabled !== undefined;
  let isLoading = !isDisabled && loading !== undefined;

  console.log(labelProps);
  console.log(focusProps);

  let accessibleProps = {
    id,
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
      className={clsx('button', className)}
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
