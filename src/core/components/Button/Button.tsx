import clsx from 'clsx';
import { Core } from '@/types';
import { Icon, UnstyledButton } from '@/core';
import { PolymorphicComponent } from '@/factory';
import { useButtonContext } from './ButtonContext';
import { ButtonGroup } from './ButtonGroup';

export type ButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ButtonProps;
  element: typeof UnstyledButton;
  elements: {
    Group: typeof ButtonGroup;
  };
}>;

export const Button = PolymorphicComponent<ButtonFactory>(
  (
    {
      size = 'sm',
      value,
      variant = 'default',
      children,
      className,
      isLoading,
      isDisabled,
      isReadonly,
      isSelected,
      fullWidth,
      iconRight,
      iconLeft,
      onChange,
      component: Component = UnstyledButton,
      ...props
    },
    ref
  ) => {
    const context = useButtonContext();

    const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onChange?.(event);

      if (!value) return;

      if (!(isLoading || isReadonly || isDisabled)) {
        if (typeof value !== 'string') {
          console.error('[@v2/core/Action]: value must be provided to Action or ActionGroup');
        } else {
          context.onValueChange?.(value);
        }
      }
    };

    const contextProps = !context
      ? { isSelected, isDisabled, isReadonly, isLoading }
      : {
          'aria-orientation': context.orientation,
          isSelected: isSelected || value === context.value,
          isDisabled,
          isReadonly,
          isLoading,
        };

    return (
      <Component
        {...props}
        {...contextProps}
        data-block={!!fullWidth}
        className={clsx('v2-button', `v2-button--${size}`, `v2-button--${variant}`, className)}
        onChange={handleChange}
        ref={ref}
      >
        <span className="v2-button-layout">
          {iconLeft && (
            <div className="v2-button-section" data-position="left">
              <Icon {...iconLeft} />
            </div>
          )}

          {children && (
            <div className="v2-button-label" data-isLoading={isLoading}>
              {children}
            </div>
          )}

          {iconRight && (
            <div className="v2-button-section" data-position="right">
              <Icon {...iconRight} />
            </div>
          )}
        </span>
      </Component>
    );
  }
);

Button.Group = ButtonGroup;
Button.displayName = '@v2/Button';
