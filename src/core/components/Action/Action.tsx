import { Factory } from '@/types';
import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './Action.context';
import { ActionCSS, ActionRootProps } from './types';
import { factory, UnstyledButton, useThemeClasses, createKeyDownGroup } from '@/core';

const css: Partial<ActionCSS> = {
  root: 'v2-action',
};

type ActionRootFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: ActionRootProps;
  comps: {
    Group: typeof ActionGroup;
    Spacer: typeof ActionSpacer;
  };
}>;

const Action = factory<ActionRootFactory>((props, ref) => {
  const {
    icon,
    label,
    value,
    scheme,
    variant,
    disabled,
    selected,
    withTitle,
    className,
    ...forwardedProps
  } = props;

  const ctx = useActionContext();

  const classes = useThemeClasses({
    prefix: css.root!,
    props: { scheme, variant },
    context: { scheme: ctx?.scheme, variant: ctx?.variant },
    defaultProps: { scheme: 'default', variant: 'default' },
    className,
  });

  const isDisabled = disabled || undefined;
  const isSelected = selected || undefined;
  const isGroupDisabled = (ctx.disabled ?? disabled) || undefined;
  const isGroupSelected = ((value && ctx.value === value) ?? isSelected) || undefined;

  const contextProps = ctx
    ? {
        id: ctx.getActionId(label),
        title: ctx.withTitle ? label : undefined,
        'aria-disabled': isGroupDisabled,
        'aria-selected': isGroupSelected,
        'data-disabled': isGroupDisabled,
        'data-selected': isGroupSelected,
        'data-orientation': ctx.orientation,
        onKeyDown: createKeyDownGroup({
          onKeyDown: forwardedProps.onKeyDown,
          parentSelector: ctx.parentSelector,
          childSelector: ctx.childSelector,
          orientation: ctx.orientation,
          loop: ctx.loopFocus,
        }),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      className={classes}
      title={withTitle ? label : undefined}
      aria-label={forwardedProps['aria-label'] || label}
      aria-disabled={isDisabled}
      aria-selected={isSelected}
      data-selected={isSelected}
      data-disabled={isDisabled}
      {...forwardedProps}
      {...contextProps}
    >
      {icon}
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
