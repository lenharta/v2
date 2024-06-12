import clsx from 'clsx';
import { Factory } from '@/types';
import { factory, UnstyledButton, createKeyDownGroup } from '@/core';

import { ActionProps } from './action-types';
import { ActionGroup } from './ActionGroup';
import { ActionSpacer } from './ActionSpacer';
import { useActionContext } from './action-context';
import { css } from './action-constants';

type ActionRootFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: ActionProps;
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

  const isDisabled = disabled || undefined;
  const isSelected = selected || undefined;
  const isGroupDisabled = ctx.disabled || disabled || undefined;
  const isGroupSelected = (value && ctx.value === value) || isSelected || undefined;

  const contextProps = ctx
    ? {
        id: ctx.getActionId(label),
        title: ctx.withTitle ? label : undefined,
        className: clsx(
          css.root,
          `${css.root}--scheme-${scheme || ctx.scheme}`,
          `${css.root}--variant-${variant || ctx.variant}`,
          className
        ),
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
      title={withTitle ? label : undefined}
      className={clsx(
        css.root,
        `${css.root}--scheme-${scheme}`,
        `${css.root}--variant-${variant}`,
        className
      )}
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
