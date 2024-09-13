import clsx from 'clsx';
import { Component } from '@/factory';
import { Core, ICON } from '@/types';
import { Icon, InlineInput } from '@/core/components';
import { useCheckboxContext } from './Checkbox.context';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';

export type CheckboxFactory = Core.Factory<{
  ref: HTMLInputElement;
  props: Core.CheckboxProps;
  element: 'input';
  elements: {
    Group: typeof CheckboxGroup;
  };
}>;

export function parseCheckboxState(props: Partial<Core.CheckboxProps>): Core.CheckboxState {
  const { mixed, checked } = props;

  let state: Core.CheckboxState = 'false';

  if (checked && mixed) state = 'mixed';

  if (checked && !mixed) state = 'true';

  return state;
}

export function parseCheckboxIcon(
  props: Partial<Core.CheckboxProps> & { state: Core.CheckboxState }
): ICON.Name {
  const { shape, state } = props;

  let name: ICON.Name = 'checkbox-unchecked-square';

  if (state === 'true' && shape === 'square') {
    name = 'checkbox-checked-square';
  }

  if (state === 'false' && shape === 'square') {
    name = 'checkbox-unchecked-square';
  }

  if (state === 'mixed' && shape === 'square') {
    name = 'checkbox-mixed-square';
  }

  if (state === 'true' && shape === 'circle') {
    name = 'checkbox-checked-circle';
  }

  if (state === 'false' && shape === 'circle') {
    name = 'checkbox-unchecked-circle';
  }

  if (state === 'mixed' && shape === 'circle') {
    name = 'checkbox-mixed-circle';
  }

  return name;
}

export const Checkbox = Component<CheckboxFactory>(
  (
    {
      size,
      shape,
      label,
      mixed,
      variant,
      checked,
      iconProps,
      rootProps,
      isDisabled,
      isLoading,
      isReadonly,
      className,
      component: Component = 'input',
      ...props
    },
    ref
  ) => {
    const context = useCheckboxContext();

    const contextProps = context
      ? {
          value: props.value,
          checked: (props.value && context.value.includes(props.value)) || false,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!isDisabled && !isReadonly && !isLoading) {
              context.onChange?.(event);
              props.onChange?.(event);
            }
          },
        }
      : {
          value: props.value,
          checked: checked || false,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!isDisabled && !isReadonly && !isLoading) {
              props.onChange?.(event);
            }
          },
        };

    const checkboxState = parseCheckboxState({
      checked: contextProps.checked,
      mixed,
    });

    const checkboxIcon = parseCheckboxIcon({
      state: checkboxState,
      shape: shape || 'square',
    });

    return (
      <InlineInput
        {...rootProps}
        label={label}
        isLoading={isLoading}
        isReadonly={isReadonly}
        isDisabled={isDisabled}
        className={clsx(
          'v2-checkbox',
          `v2-checkbox--${size || context?.size || 'sm'}`,
          `v2-checkbox--${variant || context?.variant || 'default'}`,
          className
        )}
      >
        <Component
          {...props}
          {...contextProps}
          ref={ref}
          type="checkbox"
          className="v2-checkbox-input"
          aria-checked={checkboxState}
          {...(context && { 'data-checkbox-item': true })}
        />

        <Icon {...iconProps} name={checkboxIcon} className="v2-checkbox-icon" />
      </InlineInput>
    );
  }
);

Checkbox.Group = CheckboxGroup;
Checkbox.displayName = '@v2/Checkbox';
