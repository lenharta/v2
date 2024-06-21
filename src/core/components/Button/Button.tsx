import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { UnstyledButton } from '@/core';
import { ButtonProps } from './Button.types';
import { ButtonGroup } from './ButtonGroup';
import { useButtonContext } from './Button.context';

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof UnstyledButton;
  props: ButtonProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

const Button = factory<ButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    variant = 'default',
    loading,
    disabled,
    readOnly,
    children,
    className,
    ...forwardedProps
  } = props;

  const ctx = useButtonContext();

  const contextProps = ctx
    ? {
        className: clsx(
          'v2-button',
          `v2-button--size-${size || ctx.size}`,
          `v2-button--${variant || ctx.variant}`,
          className
        ),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(
        'v2-button',
        `v2-button--size-${size || ctx.size}`,
        `v2-button--${variant || ctx.variant}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      {children}
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
