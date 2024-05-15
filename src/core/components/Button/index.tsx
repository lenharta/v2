import clsx from 'clsx';
import { Factory } from '@/types';
import { UnstyledButton } from '@/core/components/UnstyledButton';
import { factoryPolymorphic } from '@/core/factory';

interface ButtonProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

type ButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ButtonProps;
}>;

const Button = factoryPolymorphic<ButtonFactory>((props, ref) => {
  const {
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
      className={clsx('v2-button', className)}
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

Button.displayName = '@v2/Button';
export { Button, type ButtonProps };
