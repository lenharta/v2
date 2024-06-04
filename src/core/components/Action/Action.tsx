import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '@/core/components';
import { createKeyDownGroup } from '@/core/utils';

import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './Action.context';
import { ActionCSS, ActionRootProps } from './types';

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
    variant = 'default',
    disabled,
    selected,
    withTitle,
    className,
    ...forwardedProps
  } = props;

  const ctx = useActionContext();

  const classNames = clsx(
    css.root,
    {
      [`${css.root}--${variant}`]: variant && !ctx.variant,
      [`${css.root}--${ctx.variant}`]: ctx.variant,
    },
    className
  );

  const contextProps = ctx
    ? {
        id: ctx.getActionId(label.toLowerCase().split(' ').join('')),
        title: ctx.withTitle ? label : undefined,
        'aria-label': forwardedProps['aria-label'] || label,
        'aria-disabled': ctx.disabled || disabled,
        'data-disabled': ctx.disabled || disabled,
        'aria-selected': ctx.value === value || selected,
        'data-selected': ctx.value === value || selected,
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
        'aria-disabled': disabled,
        'aria-selected': selected,
        'data-disabled': disabled,
        'data-selected': selected,
        'data-core-action-item': true,
      };

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      className={classNames}
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
