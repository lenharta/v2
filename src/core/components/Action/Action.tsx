import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../../factory';
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

const Action = factory<ActionFactory>((props, ref) => {
  const {
    icon,
    label,
    value = '/',
    variant = 'default',
    loading,
    disabled,
    readOnly,
    selected,
    navigate,
    className,
    ...forwardedProps
  } = props;

  const ctx = useActionContext();

  const contextProps = ctx
    ? {
        className: clsx('v2-action', `v2-action--${variant || ctx.variant}`, className),
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          ctx.navigate && ctx.navigate(event.currentTarget.value as string);
          forwardedProps.onClick?.(event);
        },
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      label={label}
      loading={loading}
      readOnly={readOnly}
      disabled={disabled}
      selected={selected}
      className={clsx('v2-action', `v2-action--${variant}`, className)}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        navigate && navigate(event.currentTarget.value as string);
        forwardedProps.onClick?.(event);
      }}
      {...forwardedProps}
      {...contextProps}
    >
      <Icon name={icon} size="md" />
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
