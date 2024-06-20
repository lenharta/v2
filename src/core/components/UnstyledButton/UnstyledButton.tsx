import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core';
import { UnstyledButtonProps } from './UnstyledButton.types';

type UnstyledButtonFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: UnstyledButtonProps;
}>;

const UnstyledButton = factoryPolymorphic<UnstyledButtonFactory>((props, ref) => {
  const {
    loading,
    readOnly,
    disabled,
    className,
    component: Component = 'button',
    ...forwardedProps
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx('v2-button-u', className)}
      aria-busy={loading}
      data-loading={loading}
      data-disabled={disabled}
      aria-disabled={disabled}
      aria-readonly={readOnly}
      data-readonly={readOnly}
      {...forwardedProps}
    />
  );
});

UnstyledButton.displayName = '@v2/UnstyledButton';
export { UnstyledButton };
