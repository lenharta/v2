import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';
import { UnstyledButton } from '@/core';
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
    value,
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

  const ctx = useButtonContext();

  const contextProps = ctx
    ? {
        loading: loading || ctx.loading,
        selected: selected || (!!ctx.value && value === ctx.value) || undefined,
        disabled: disabled || ctx.disabled,
        readOnly: readOnly || ctx.readOnly,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
        className: clsx('v2-button', className),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      className={clsx('v2-button', className)}
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
