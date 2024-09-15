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
      isChecked,
      isSelected,
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
        data-loading={!!isLoading || undefined}
        data-checked={!!isChecked || undefined}
        data-selected={!!isSelected || undefined}
        data-disabled={!!isDisabled || undefined}
        data-readonly={!!isReadonly || undefined}
        aria-readonly={!!isReadonly || undefined}
        aria-disabled={!!isDisabled || undefined}
        aria-selected={!!isSelected || undefined}
        aria-checked={!!isChecked || undefined}
        aria-busy={!!isLoading || undefined}
      >
        {children}
      </Component>
    );
  }
);

UnstyledButton.displayName = '@v2/UnstyledButton';
