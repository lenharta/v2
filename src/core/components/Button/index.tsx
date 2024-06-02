import clsx from 'clsx';
import { Factory } from '@/types';
import { ButtonGroup } from './Group';
import { ButtonProps } from './Button.types';
import { UnstyledButton } from '@/core/components/UnstyledButton';
import { factoryPolymorphic } from '@/core/factory';

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
  comps: {
    Group: typeof ButtonGroup;
  };
}>;

const Button = factoryPolymorphic<ButtonFactory>((props, ref) => {
  const {
    size = 'sm',
    children,
    component = 'button',
    className,
    leftContent,
    rightContent,
    ...forwardedProps
  } = props;

  return (
    <UnstyledButton
      {...forwardedProps}
      className={clsx('v2-button', `v2-button-size--${size}`, className)}
      component={component}
      ref={ref}
    >
      <span className="v2-button-inner">
        {leftContent && <div>{leftContent}</div>}
        {children}
        {rightContent && <div>{rightContent}</div>}
      </span>
    </UnstyledButton>
  );
});

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
export { Button, type ButtonFactory };
