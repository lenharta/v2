import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
import { UnstyledButton } from '@/core';
import { ButtonProps } from './Button.types';

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof UnstyledButton;
  props: ButtonProps;
}>;

const Button = factory<ButtonFactory>((props, ref) => {
  const { children, className, disabled, readOnly, loading, ...forwardedProps } = props;
  return (
    <UnstyledButton
      ref={ref}
      loading={loading}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx('v2-button', className)}
      {...forwardedProps}
    >
      {children}
    </UnstyledButton>
  );
});

// Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button };
