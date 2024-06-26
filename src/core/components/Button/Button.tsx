import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { Icon, IconProps, UnstyledButton } from '@/core';
import { ButtonProps } from './types';
import { ButtonGroup } from './ButtonGroup';
import { useButtonContext } from './context';

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
    align,
    justify,
    surface,
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    children,
    iconLeft,
    iconRight,
    className,
    ...forwardedProps
  } = props;

  const ctx = useButtonContext();

  const contextProps = ctx
    ? {
        loading: !!ctx.loading || !!loading || undefined,
        disabled: !!ctx.disabled || !!disabled || undefined,
        readOnly: !!ctx.readOnly || !!readOnly || undefined,
        selected: (!!ctx.value && value === ctx.value) || !!selected || undefined,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
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
        `v2-button--size-${size || ctx.size || 'sm'}`,
        `v2-button--align-${align || ctx.align || 'center'}`,
        `v2-button--justify-${justify || ctx.justify || 'center'}`,
        `v2-surface--${surface || ctx.surface || 'base'}`,
        `v2-surface--${variant || ctx.variant || 'elevated'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <div className="v2-button-layout">
        {iconLeft && (
          <Icon name={iconLeft.name} size={iconLeft.size || 'sm'} data-position="left" />
        )}

        {children}

        {iconRight && (
          <Icon name={iconRight.name} size={iconRight.size || 'sm'} data-position="right" />
        )}
      </div>
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
