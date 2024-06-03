import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { UnstyledButton } from '@/core/components';
import { createKeyDownGroup } from '@/core/utils';

import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './Action.context';
import { ActionRootProps, ActionRootCSS } from './types';

const css: ActionRootCSS = {
  root: 'v2-action-root',
  inner: 'v2-action-inner',
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
    elevated,
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
      [`${css.root}--default`]: !ctx.elevated || !elevated,
      [`${css.root}--elevated`]: ctx.elevated || elevated,
    },
    className
  );

  const contextProps = ctx
    ? {
        id: ctx.getActionId(forwardedProps.id || ctx.value || value),
        title: ctx.withTitle ? label : undefined,
        'aria-disabled': ctx.disabled,
        'data-disabled': ctx.disabled,
        'aria-selected': ctx.value === value || undefined,
        'data-selected': ctx.value === value || undefined,
        'data-orientation': ctx.orientation,
        onKeyDown: createKeyDownGroup({
          onKeyDown: forwardedProps.onKeyDown,
          preventDefault: false,
          parentSelector: '[data-core-action-group]',
          childSelector: '[data-core-action-item]',
          orientation: ctx.orientation,
          loop: false,
        }),
      }
    : {};

  return (
    <UnstyledButton
      ref={ref}
      value={value}
      title={withTitle ? label : undefined}
      className={classNames}
      aria-label={forwardedProps['aria-label'] || label}
      aria-disabled={selected}
      aria-selected={selected}
      data-selected={selected}
      data-disabled={selected}
      data-core-action-item
      {...forwardedProps}
      {...contextProps}
    >
      <span className={css.inner}>{icon}</span>
    </UnstyledButton>
  );
});

Action.Group = ActionGroup;
Action.Spacer = ActionSpacer;
Action.displayName = '@v2/Action';
export { Action };
