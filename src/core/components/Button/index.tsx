import clsx from 'clsx';
import { Factory } from '@/types';
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
    className,
    leftContent,
    rightContent,
    component: Component = 'button',
    ...forwardedProps
  } = props;

  return (
    <Component ref={ref} {...forwardedProps} className={clsx('v2-button', className)}>
      <span className="v2-button-inner">
        {leftContent && <div>{leftContent}</div>}
        {children}
        {rightContent && <div>{rightContent}</div>}
      </span>
    </Component>
  );
});

Button.displayName = '@v2/Button';
export { Button, type ButtonProps };
