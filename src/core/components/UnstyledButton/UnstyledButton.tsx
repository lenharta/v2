import clsx from 'clsx';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';

export type UnstyledButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.UnstyledButtonProps;
  element: 'button';
}>;

export const UnstyledButton = PolymorphicComponent<UnstyledButtonFactory>(
  (
    {
      children,
      className,
      isLoading,
      isReadonly,
      isDisabled,
      component: Component = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={clsx('v2-button-unstyled', className)}
        aria-busy={!!isLoading}
        aria-disabled={!!isDisabled}
        aria-readonly={!!isReadonly}
        data-disabled={!!isDisabled}
        data-readonly={!!isReadonly}
        data-loading={!!isLoading}
      >
        {children}
      </Component>
    );
  }
);

UnstyledButton.displayName = '@v2/UnstyledButton';
