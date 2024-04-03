import clsx from 'clsx';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';

export interface ButtonProps {
  /** Indicates a `loading` state for the button element */
  loading?: boolean | undefined;

  /** Defines a index for tabbing the button element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the button element. */
  disabled?: boolean | undefined;

  /** Defines if the button element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Defines if the button element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;

  /** A label for the button element */
  children?: React.ReactNode | undefined;

  /** Content placed to the `left` of button label element */
  leftContent?: React.ReactNode | undefined;

  /** Content placed to the `right` of button label element */
  rightContent?: React.ReactNode | undefined;
}

type ButtonOmittedProps = 'children' | 'disabled';

export type ButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
  omits: ButtonOmittedProps;
}>;

export const Button = factory<ButtonFactory>((props, ref) => {
  const {
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

  const focusProps = useFocusIndex({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  if (!otherProps['aria-label'] && typeof children !== 'string') {
    console.warn(
      '[@v2/core/Button]: Button components must be provided a `label` prop for accessibility.'
    );
  }

  let accessibleProps = {
    ...focusProps,
    ...(loading ? { 'aria-busy': true } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(otherProps['role'] ? { role: otherProps['role'] } : { role: 'button' }),
    ...(!!(typeof children === 'string') ? { 'aria-label': children } : {}),
    ...(!!otherProps['aria-label'] ? { 'aria-label': otherProps['aria-label'] } : {}),
  };

  return (
    <button {...otherProps} {...accessibleProps} ref={ref} className={clsx('button', className)}>
      {loading ? (
        <span className="button-inner" style={{ opacity: 0.5 }}>
          <span>Loading...</span>
        </span>
      ) : (
        <span className="button-inner">
          {leftContent && <div data-position="left">{leftContent}</div>}
          {children && <div>{children}</div>}
          {rightContent && <div data-position="right">{rightContent}</div>}
        </span>
      )}
    </button>
  );
});

Button.displayName = '@v2/core/Button';
