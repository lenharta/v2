import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { Icon, UnstyledButton } from '@core';
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
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    children,
    iconLeft,
    fullWidth,
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
      data-block={!!fullWidth || undefined}
      className={clsx(
        'v2-button',
        `v2-button--${size || ctx.size || 'sm'}`,
        `v2-button--${variant || ctx.variant || 'default'}`,
        `v2-button--align-${align || ctx.align || 'center'}`,
        `v2-button--justify-${justify || ctx.justify || 'center'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <span className="v2-button-layout">
        {iconLeft && (
          <span className="v2-button-section" data-position="left">
            <Icon name={iconLeft.name} />
          </span>
        )}

        <span className="v2-button-label" data-loading={loading}>
          {children}
        </span>

        {iconRight && (
          <span className="v2-button-section" data-position="right">
            <Icon name={iconRight.name} />
          </span>
        )}
      </span>
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
