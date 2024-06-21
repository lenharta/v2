import clsx from 'clsx';
import { Factory } from '@/types';
import { isNotLabelled } from '@/utils';
import { createFactory } from '@/factory';
import { Icon, UnstyledButton } from '@/core';
import { useActionContext } from './Action.context';
import { ActionSpacer } from './ActionSpacer';
import { ActionProps } from './Action.types';
import { ActionGroup } from './ActionGroup';

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  omits: 'children';
  comps: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

const Action = createFactory<ActionFactory>((props, ref) => {
  const {
    size,
    icon,
    label,
    value,
    radius,
    variant,
    loading,
    disabled,
    readOnly,
    selected,
    className,
    ...forwardedProps
  } = props;

  if (isNotLabelled(label, forwardedProps['aria-label'])) {
    console.error(`[@v2/core/Action]: label must be provided to the element for accessibility.`);
  }

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        loading: loading || ctx.loading,
        selected: (!!ctx.value && value === ctx.value) || undefined,
        disabled: disabled || ctx.disabled,
        readOnly: readOnly || ctx.readOnly,
        'data-orientation': ctx.orientation,
        'aria-orientation': ctx.orientation,
        className: clsx(
          'v2-action',
          `v2-action--${variant ?? ctx.variant ?? 'elevated'}`,
          `v2-action--size-${size ?? ctx.size ?? 'md'}`,
          `v2-action--radius-${radius ?? ctx.radius ?? 'default'}`,
          className
        ),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      label={label}
      value={value}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      className={clsx(
        'v2-action',
        `v2-action--${variant ?? 'elevated'}`,
        `v2-action--size-${size ?? 'sm'}`,
        `v2-action--radius-${radius ?? 'default'}`,
        className
      )}
      {...forwardedProps}
      {...contextProps}
    >
      <Icon name={icon ?? ctx.icon ?? 'shape-circle'} size="md" />
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
