import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { isNotLabelled } from '@/utils';
import { UnstyledButton } from '@/core';
import { ButtonGroup } from './ButtonGroup';
import { ButtonProps } from './Button.types';
import { useButtonContext } from './Button.context';

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof UnstyledButton;
  props: ButtonProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

const Button = createFactory<ButtonFactory>((props, ref) => {
  const {
    size,
    value,
    label,
    radius,
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    children,
    className,
    leftContent,
    rightContent,
    ...forwardedProps
  } = props;

  if (isNotLabelled(label, children, forwardedProps['aria-label'])) {
    console.error(`[@v2/core/Button]: label must be provided to the element for accessibility.`);
  }

  const ctx = useButtonContext();

  const contextProps = ctx
    ? {
        loading: loading || ctx.loading,
        selected: (!!ctx.value && value === ctx.value) || undefined,
        disabled: disabled || ctx.disabled,
        readOnly: readOnly || ctx.readOnly,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
        className: clsx(
          'v2-button',
          `v2-button--${variant || ctx.variant || 'elevated'}`,
          `v2-button--size-${size || ctx.size || 'md'}`,
          `v2-button--radius-${radius || ctx.radius || 'default'}`,
          className
        ),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      className={clsx(
        'v2-button',
        `v2-button--${variant || 'elevated'}`,
        `v2-button--size-${size || 'sm'}`,
        `v2-button--radius-${radius || 'default'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <div>{leftContent}</div>
      <div>{children}</div>
      <div>{rightContent}</div>
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
