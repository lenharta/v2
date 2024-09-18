import clsx from 'clsx';
import { Icon } from '@/core';
import { Core } from '@/types';
import { PolymorphicComponent } from '@/factory';
import { ButtonGroup } from './ButtonGroup';
import { useButtonContext } from './ButtonContext';

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
      align,
      justify,
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

    const loading = isLoading || (context && context.isLoading);
    const disabled = isDisabled || (context && context.isDisabled);
    const readonly = isReadonly || (context && context.isReadonly);
    const selected = isSelected || (context.value && value && context.value === value);

    const classNames = clsx(
      'v2-button',
      `v2-button--${size || context.size || 'md'}`,
      `v2-button--${variant || context.variant || 'default'}`,
      `v2-button--axis-y-${align || context.align || 'center'}`,
      `v2-button--axis-x-${justify || context.justify || 'center'}`,
      className
    );

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

    return (
      <Component
        {...props}
        data-loading={loading}
        data-selected={selected}
        data-readonly={readonly}
        data-disabled={disabled}
        data-block={!!fullWidth || undefined}
        className={classNames}
        onChange={handleChange}
        value={value}
        ref={ref}
      >
        <span className="v2-button-layout">
          {iconLeft && (
            <div className="v2-button-section" data-position="left">
              <Icon {...iconLeft} />
            </div>
          )}

          <div className="v2-button-label">{children}</div>

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
