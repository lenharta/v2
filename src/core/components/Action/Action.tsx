import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { mergeProps } from '@/core/utils';
import { Icon, UnstyledButton } from '@/core';
import { useActionContext } from './ActionContext';
import { ActionSpacer } from './ActionSpacer';
import { ActionGroup } from './ActionGroup';

export type ActionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: Core.ActionProps;
  element: 'button';
  excluded: 'children';
  elements: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

export const Action = Component<ActionFactory>((props, ref) => {
  const context = useActionContext();

  const {
    size,
    icon,
    value,
    variant,
    loading,
    disabled,
    readOnly,
    onChange,
    selected,
    className,
    ...otherProps
  } = mergeProps(props, context, {
    icon: { type: 'outline' },
    variant: 'default',
    size: 'md',
  });

  const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange?.(event);

    if (!value) return;

    if (!(loading || readOnly || disabled)) {
      if (typeof value !== 'string') {
        console.error('[@v2/core/Action]: value must be provided to Action or ActionGroup');
      } else {
        context.onValueChange?.(value);
      }
    }
  };

  const contextProps = !context
    ? { selected, disabled, readOnly, loading }
    : {
        'aria-orientation': context.orientation,
        selected: selected || context.value === value,
        disabled,
        readOnly,
        loading,
      };

  return (
    <UnstyledButton
      {...otherProps}
      {...contextProps}
      className={clsx('v2-action', `v2-action--${size}`, `v2-action--${variant}`, className)}
      onChange={handleChange}
      value={value}
      ref={ref}
    >
      <Icon {...icon} />
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
