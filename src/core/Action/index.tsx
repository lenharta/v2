import clsx from 'clsx';
import { ICON, Icon } from '@/core';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';

export interface ActionProps {
  /** Defines the type of icon for the action button element. */
  icon?: ICON | undefined;

  /** Defines a shorthand property for action button `aria-label` property */
  label?: string | undefined;

  /** Defines a index for tabbing the action button element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the action button element. */
  disabled?: boolean | undefined;

  /** Indicates if the action button element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Indicates if the action button element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;

  /** Defines a default HTML `className` appended to the action button classList */
  className?: string | undefined;
}

export type ActionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  omits: 'children';
}>;

export const Action = factory<ActionFactory>((props, ref) => {
  const {
    icon = 'placeholder',
    label = 'action',
    disabled,
    tabIndex,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const hasLabel = otherProps['aria-label'] || label;

  const focusProps = useFocusIndex({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  let accessibleProps = {
    ...focusProps,
    ...(hasLabel ? { title: hasLabel } : {}),
    ...(hasLabel ? { 'aria-label': hasLabel } : {}),
  };

  return (
    <button {...otherProps} {...accessibleProps} ref={ref} className={clsx('action', className)}>
      <Icon name={icon} />
    </button>
  );
});

Action.displayName = '@v2/core/Action';
