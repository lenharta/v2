import clsx from 'clsx';
import { Icon } from '@/core';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';
import { useButtonContext } from './ButtonContext';
import { ButtonGroup } from './ButtonGroup';

export type ButtonFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ButtonProps;
  element: 'button';
  excluded: 'disabled';
  elements: {
    Group: typeof ButtonGroup;
  };
}>;

export const Button = PolymorphicComponent<ButtonFactory>(
  (
    {
      size,
      value,
      variant,
      children,
      iconLeft,
      iconRight,
      fullWidth,
      className,
      isLoading,
      isDisabled,
      isReadonly,
      isSelected,
      component: Component = 'button',
      onChange,
      ...props
    },
    ref
  ) => {
    const context = useButtonContext();
    const loading = isLoading || context.isLoading;
    const disabled = isDisabled || context.isDisabled;
    const readonly = isReadonly || context.isReadonly;
    const selected = isSelected || context.value === value;

    const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onChange?.(event);

      if (!value) return;

      if (!(loading || disabled || readonly)) {
        if (typeof value !== 'string') {
          console.error('[@v2/core/Action]: value must be provided to Action or ActionGroup');
        } else {
          context.onValueChange?.(value);
        }
      }
    };

    const classNames = clsx(
      'v2-button',
      `v2-button--${size || context.size || 'md'}`,
      `v2-button--${variant || context.variant || 'default'}`,
      className
    );

    return (
      <Component
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={classNames}
        data-loading={loading}
        data-disabled={disabled}
        data-readonly={readonly}
        data-selected={selected}
        aria-selected={selected}
        data-block={!!fullWidth}
      >
        <span className="v2-button-layout">
          {iconLeft && (
            <div className="v2-button-section" data-position="left">
              <Icon {...iconLeft} />
            </div>
          )}

          {children && <div className="v2-button-label">{children}</div>}

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
