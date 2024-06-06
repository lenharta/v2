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

  const contextProps = ctx
    ? {
        id: ctx.getActionId(label),
        title: ctx.withTitle ? label : undefined,
        'aria-label': forwardedProps['aria-label'] || label,
        'aria-disabled': !!ctx.disabled || !!disabled || undefined,
        'data-disabled': !!ctx.disabled || !!disabled || undefined,
        'aria-selected': ctx.value === value || selected || undefined,
        'data-selected': ctx.value === value || selected || undefined,
        'data-orientation': ctx.orientation,
        'data-core-action-item': true,
        onKeyDown: createKeyDownGroup({
          onKeyDown: forwardedProps.onKeyDown,
          preventDefault: false,
          parentSelector: '[data-core-action-group]',
          childSelector: '[data-core-action-item]',
          orientation: ctx.orientation,
          loop: false,
        }),
      }
    : {
        title: withTitle ? label : undefined,
        'aria-label': forwardedProps['aria-label'] || label,
        'aria-disabled': !!disabled || undefined,
        'aria-selected': !!selected || undefined,
        'data-disabled': !!disabled || undefined,
        'data-selected': !!selected || undefined,
        'data-core-action-item': true,
      };

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      className={classes}
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
