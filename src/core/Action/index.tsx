import clsx from 'clsx';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core/Icon';
import { ActionGroup } from '@/core/Action/Group';
import { Core, Factory } from '@/types';
import { useActionGroup } from '@/core/Action/context';
import { useFocusProps, useResolvedLabel } from '@/core/hooks';

export interface ActionProps extends Core.BaseProps, Core.FocusProps, Core.AriaLabelProps {
  /** Specifies the name of the icon path to be rendered. */
  icon?: ICON | undefined;

  /** Specifies the destination urk for the element. */
  url?: string | undefined;

  /** Specifies the size of the element. */
  size?: Core.Size5;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal';

  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;
}

export type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  comps: {
    Group: typeof ActionGroup;
  };
}>;

export const Action = factory<ActionFactory>((props, ref) => {
  const {
    url,
    size = 'sm',
    icon,
    label = 'action',
    variant = 'default',
    children,
    disabled,
    tabIndex,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const ctx = useActionGroup();

  const isDisabled = ctx.disabled || disabled;

  const actionRole = otherProps['role'] || 'button';
  const actionSizeMod = ctx.size || size;
  const actionVariantMod = ctx.variant || variant;

  const focusProps = useFocusProps({
    tabIndex,
    disabled: isDisabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  const resolvedLabel = useResolvedLabel({
    ariaLabel: otherProps['aria-label'],
    label,
  });

  const a11yProps = {
    role: actionRole,
    'aria-label': resolvedLabel,
    'aria-disabled': isDisabled,
    ...focusProps,
  };

  return (
    <button
      {...otherProps}
      {...a11yProps}
      ref={ref}
      className={clsx(
        'action',
        `action--${actionVariantMod}`,
        `action--size-${actionSizeMod}`,
        className
      )}
    >
      {!icon ? children : <Icon name={icon} />}
    </button>
  );
});

Action.displayName = '@v2/core/Action';
Action.Group = ActionGroup;
