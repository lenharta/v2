import clsx from 'clsx';
import { Icon } from '@/core';
import { Core } from '@/types';
import { Component } from '@/factory';
import { useActionContext } from './ActionContext';
import { ActionSpacer } from './ActionSpacer';
import { ActionGroup } from './ActionGroup';

export type ActionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ActionProps;
  element: 'button';
  elements: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

export const Action = Component<ActionFactory>(
  (
    {
      icon,
      size,
      value,
      variant,
      children,
      isLoading,
      isDisabled,
      isReadonly,
      isSelected,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const context = useActionContext();

    const loading = isLoading || (context && context.isLoading);
    const disabled = isDisabled || (context && context.isDisabled);
    const readonly = isReadonly || (context && context.isReadonly);
    const selected = isSelected || (context.value && value && context.value === value);

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
      'v2-action',
      `v2-action--${size || context.size || 'md'}`,
      `v2-action--${variant || context.variant || 'default'}`,
      className
    );

    return (
      <button
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={classNames}
        data-loading={loading}
        data-disabled={disabled}
        data-readonly={readonly}
        data-selected={selected}
      >
        {children}
        {!children && <Icon {...icon} />}
      </button>
    );
  }
);

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
